import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { Districts, Province, Regencies, Region, Villages } from 'src/app/core/domain/address';

import { DatePipe } from '@angular/common';
import { pathAssets } from 'src/app/configs/path-assets';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { User } from 'src/app/core/domain/user';
import { AddressService } from 'src/app/core/services/address.service';
import { UserService } from 'src/app/core/services/user.service';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
import { FormUtilService } from 'src/app/shared/services/form-util.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-profile-update',
	templateUrl: './profile-update.component.html',
	styleUrls: ['./profile-update.component.scss'],
	providers: [DatePipe],
})
export class ProfileUpdateComponent implements OnInit {
	protected form!: FormGroup;
	protected isSubmitting: boolean = false;
	readonly defaultAvatar = pathAssets.emptyAvatar;
	readonly iconUpload = pathAssets.iconUpload;

	protected user!: User;
	protected dropdownProvince!: Province[];
	protected dropdownRegencies!: Regencies[];
	protected dropdownDistricts!: Districts[];
	protected dropdownVillages!: Villages[];

	protected provinceIdentity!: string;
	protected regencyIdentity!: string;
	protected districtIdentity!: string;
	protected villageIdentity!: string;

	protected userIdentity!: string;

	protected selectedFile: File | null = null;
	protected coverPreview!: string;
	protected avatarPreview!: string;

	// protected coverImage: File | null = null;

	protected provinceSelected!: string;
	protected regencySelected!: string;
	protected districtSelected!: string;
	protected villageSelected!: string;

	protected isCoverChanged: boolean = false;
	protected isAvatarChanged: boolean = false;
	readonly maxSize: number = 1048576;
	readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png'];

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private userService: UserService,
		private addressService: AddressService,
		private validator: ValidatorsService,
		private formUtils: FormUtilService,
		private capitalize: CapitalizePipe,
		private datePipe: DatePipe
	) {
		this.userIdentity = this.route.snapshot.paramMap.get('id')!;
	}

	ngOnInit(): void {
		this.fetchData();
	}

	fetchData(): void {
		this.getUserInfo();
		this.formInitialized();
		this.getProvinces();
	}

	private formInitialized(): void {
		this.form = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(6)]],
			phone: ['', [Validators.required, this.validator.indonesianPhoneNumber()]],
			dob: ['', Validators.required],
			avatar: [null],
			cover: [null],
			description: ['', [Validators.required, Validators.minLength(6)]],
			street: ['', Validators.required],
			provinces: ['', Validators.required],
			regencies: ['', Validators.required],
			districts: ['', Validators.required],
			villages: ['', Validators.required],
			occupation: ['', Validators.required],
			company: ['', Validators.required],
		});
	}

	private getUserInfo(): void {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.userService.findUserById(id).subscribe({
			next: (response: HttpResponseEntity<User>) => {
				this.user = response.data;

				this.prepopulateForms(response.data!);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	getProvinces(): void {
		this.addressService.findAllProvinces().subscribe({
			next: (response: HttpResponseEntity<Province[]>) => {
				this.dropdownProvince = response.data;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	getRegencies(id: string): void {
		this.addressService.findAllRegencies(id).subscribe({
			next: (response: HttpResponseEntity<Regencies[]>) => {
				this.dropdownRegencies = response.data;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	getDistricts(id: string): void {
		this.addressService.findAllDistricts(id).subscribe({
			next: (response: HttpResponseEntity<Districts[]>) => {
				this.dropdownDistricts = response.data;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	getVillages(id: string): void {
		this.addressService.findAllVillages(id).subscribe({
			next: (response: HttpResponseEntity<Villages[]>) => {
				this.dropdownVillages = response.data;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	protected onUpdateProvinceForm(region: Region) {
		this.provinceIdentity = region.id;
		const regionName = this.capitalized(region?.name);

		if (!this.provinceIdentity) {
			this.form.get('provinces')?.setValue(regionName);
		} else {
			this.form.patchValue({
				provinces: region.name,
			});
		}
		this.getRegencies(region.id);
	}

	protected onUpdateRegencyForm(region: Region) {
		this.regencyIdentity = region.id;
		const regionName = this.capitalized(region.name);

		if (!this.regencyIdentity) {
			this.form.get('regencies')?.setValue(regionName);
		} else {
			this.form.patchValue({
				regencies: region.name,
			});
		}

		this.getDistricts(region.id);
	}

	protected onUpdateDistrictForm(region: Region) {
		this.districtIdentity = region.id;
		const regionName = this.capitalized(region.name);

		this.updateValue('districts', regionName, region);

		this.getVillages(region.id);
	}

	private updateValue(form: string, regionName: void, region: Region) {
		if (!this.districtIdentity) {
			this.form.get(form)?.setValue(regionName);
		} else {
			this.form.patchValue({
				districts: region.name,
			});
		}
	}

	protected onUpdateVillageForm(region: Region) {
		this.villageIdentity = region.id;
		const regionName = this.capitalized(region.name);

		if (!this.villageIdentity) {
			this.form.get('villages')?.setValue(regionName);
		} else {
			this.form.patchValue({ villages: region.name });
		}
	}

	capitalized(name: string) {
		this.capitalize.transform(name);
	}

	get formCtrlValue() {
		return {
			username: this.form.get('username')?.value,
			phone: this.form.get('phone')?.value,
			dob: this.form.get('dob')?.value,
			avatar: this.form.get('avatar')?.value,
			cover: this.form.get('cover')?.value,
			description: this.form.get('description')?.value,
			street: this.form.get('street')?.value,
			villages: this.form.get('villages')?.value,
			regencies: this.form.get('regencies')?.value,
			districts: this.form.get('districts')?.value,
			provinces: this.form.get('provinces')?.value,
			occupation: this.form.get('occupation')?.value,
			company: this.form.get('company')?.value,
		};
	}

	convertDate(date: string): string {
		return this.datePipe.transform(date, 'dd/MM/yyyy')!;
	}

	protected prepopulateForms(user: User): void {
		this.form.patchValue({
			username: user.username,
			phone: user.phone,
			dob: this.convertDate(user.dob),
			avatar: user.avatar.url,
			cover: user.cover.url,
			description: user.description,
			street: user.address.street,
			provinces: (this.provinceSelected = user.address.provinces),
			regencies: (this.regencySelected = user.address.regencies),
			districts: (this.districtSelected = user.address.districts),
			villages: (this.villageSelected = user.address.villages),
			occupation: user.occupation,
			company: user.company,
		});
	}

	onChangeCover(event: Event) {
		const inputElement = event.target as HTMLInputElement;

		if (inputElement.files && inputElement.files.length > 0) {
			const file = inputElement.files[0];
			if (file.size <= this.maxSize && this.allowedFileTypes.includes(file.type)) {
				this.coverPreview = URL.createObjectURL(file);
				this.isCoverChanged = true;
				this.form.get('cover')?.setValue(file);
			} else {
				alert('File size exceeds the maximum allowed size');
			}
		}
	}

	onChangeAvatar(event: Event) {
		const inputElement = event.target as HTMLInputElement;

		if (inputElement.files && inputElement.files.length > 0) {
			const file = inputElement.files[0];
			if (file.size <= this.maxSize && this.allowedFileTypes.includes(file.type)) {
				this.avatarPreview = URL.createObjectURL(file);
				this.isAvatarChanged = true;
				this.form.get('avatar')?.setValue(file);
			} else {
				alert('File size exceeds the maximum allowed size');
			}
		}
	}

	private loadingIndicator(): void {
		this.isSubmitting = true;
		timer(2000)
			.pipe(take(1))
			.subscribe(() => (this.isSubmitting = !this.isSubmitting));
	}

	protected onProcessSave(): void {
		console.log(this.formCtrlValue);
		if (this.form.valid) {
			this.loadingIndicator();

			this.submitToServer();
			this.form.reset();
			// this.navigateAfterSucceed();
		} else {
			this.formUtils.markAllFormControlsAsTouched(this.form);
		}
	}

	navigateAfterSucceed(): void {
		this.router.navigate(['/']).then(() => {
			window.location.reload();
		});
	}

	submitToServer(): void {
		const formData = this.setFormData();
		this.userService.update(formData, this.userIdentity).subscribe({
			next: (response: HttpResponseEntity<User>) => {
				this.user = response.data;
				this.prepopulateForms(response.data!);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	private setFormData() {
		const formData = new FormData();

		formData.append('username', this.formCtrlValue.username);
		formData.append('phone', this.formCtrlValue.phone);
		formData.append('dob', this.convertDate(this.formCtrlValue.dob));

		if (this.isAvatarChanged === true) {
			formData.append('avatar', this.formCtrlValue.avatar);
		}

		if (this.isCoverChanged === true) {
			formData.append('cover', this.formCtrlValue.cover);
		}

		formData.append('description', this.formCtrlValue.description);
		formData.append('address[street]', this.formCtrlValue.street);
		formData.append('address[provinces]', this.formCtrlValue.provinces);
		formData.append('address[regencies]', this.formCtrlValue.regencies);
		formData.append('address[districts]', this.formCtrlValue.districts);
		formData.append('address[villages]', this.formCtrlValue.villages);
		formData.append('occupation', this.formCtrlValue.occupation);
		formData.append('company', this.formCtrlValue.company);

		return formData;
	}

	protected getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}
}
