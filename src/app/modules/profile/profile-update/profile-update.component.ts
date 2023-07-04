import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { pathAssets } from 'src/app/configs/path-assets';
import {
	Districts,
	Province,
	Regencies,
	Region,
	Villages,
} from 'src/app/core/domain/address';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { User } from 'src/app/core/domain/user';
import { AddressService } from 'src/app/core/services/address.service';
import { UserService } from 'src/app/core/services/user.service';
import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-profile-update',
	templateUrl: './profile-update.component.html',
	styleUrls: ['./profile-update.component.scss'],
})
export class ProfileUpdateComponent implements OnInit {
	protected user!: User;
	protected form!: FormGroup;
	protected isSubmitting: boolean = false;
	readonly defaultAvatar = pathAssets.emptyAvatar;
	readonly iconUpload = pathAssets.iconUpload;

	protected dropdownProvince!: Province[];
	protected dropdownRegencies!: Regencies[];
	protected dropdownDistricts!: Districts[];
	protected dropdownVillages!: Villages[];

	protected provinceIdentity!: string;
	protected regencyIdentity!: string;
	protected districtIdentity!: string;
	protected villageIdentity!: string;

	protected userIdentity!: string;

	protected avatars!: string;
	protected covers!: string;

	protected selectedFile: File | null = null;
	protected coverPreview!: string;
	protected avatarPreview!: string;

	// protected coverImage: File | null = null;

	protected isCoverChanged: boolean = false;
	protected isAvatarChanged: boolean = false;
	readonly maxSize: number = 1048576;
	readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png'];

	url: any = '';

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private userService: UserService,
		private addressService: AddressService,
		private validator: ValidatorsService,
		private capitalize: CapitalizePipe
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
			phone: [
				'',
				[Validators.required, this.validator.indonesianPhoneNumber()],
			],
			dob: ['', Validators.required],
			avatar: [null, Validators.required],
			cover: [null, Validators.required],
			description: ['', [Validators.required, Validators.minLength(6)]],
			street: ['', Validators.required],
			provinces: ['', Validators.required],
			regencies: ['', Validators.required],
			districts: ['', Validators.required],
			villages: ['', Validators.required],
		});
	}

	private getUserInfo(): void {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.userService.findUserById(id).subscribe({
			next: (response: HttpResponseEntity<User>) => {
				this.user = response.data;
				this.avatars = response.data.avatar.url;
				this.covers = response.data.cover.url;

				this.onCheckImages(this.avatars, this.covers);

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

	protected onReceiveProvinceId(region: Region) {
		this.provinceIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('provinces')?.setValue(regionName);
		this.getRegencies(region.id);
	}

	protected onReceiveRegencyId(region: Region) {
		this.regencyIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('regencies')?.setValue(regionName);
		this.getDistricts(region.id);
	}

	protected onReceiveDistrictId(region: Region) {
		this.districtIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('districts')?.setValue(regionName);
		this.getVillages(region.id);
	}

	protected onReceiveVillageId(region: Region) {
		this.villageIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('villages')?.setValue(regionName);
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
		};
	}

	protected prepopulateForms(user: User): void {
		this.form.patchValue({
			username: user.username,
			phone: user.phone,
			dob: user.dob,
			avatar: user.avatar.url,
			cover: user.cover.url,
			description: user.description,
			street: user.address.street,
			provinces: user.address.provinces,
			regencies: user.address.regencies,
			districts: user.address.districts,
			villages: user.address.villages,
		});
	}

	onCheckImages(cover: string, avatar: string): void {
		const coverFormCtrl = this.form.get('cover')?.value;
		const avatarFormCtrl = this.form.get('avatar')?.value;

		console.log(coverFormCtrl);
		console.log(avatarFormCtrl);

		if (coverFormCtrl === null) {
			console.log('triggered null cover');

			this.form.get('cover')?.setValue(cover);
		}

		if (avatarFormCtrl === null) {
			console.log('triggered null avatar');
			console.log(avatar);

			this.form.get('avatar')?.setValue(avatar);
		}
	}

	onChangeCover(event: Event) {
		const inputElement = event.target as HTMLInputElement;

		if (inputElement.files && inputElement.files.length > 0) {
			const file = inputElement.files[0];

			if (
				file.size <= this.maxSize &&
				this.allowedFileTypes.includes(file.type)
			) {
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

			if (
				file.size <= this.maxSize &&
				this.allowedFileTypes.includes(file.type)
			) {
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
			.subscribe(() => (this.isSubmitting = false));
	}

	protected onProcessSave(): void {
		if (this.form.valid) {
			this.loadingIndicator();
			this.submitToServer();
			this.form.reset();
			// this.router.navigate(['/']).then(() => {
			//   window.location.reload();
			// });
		} else {
			this.markAllFormControlsAsTouched(this.form);
		}
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
		formData.append('dob', this.formCtrlValue.dob);
		formData.append('avatar', this.formCtrlValue.avatar);
		formData.append('cover', this.formCtrlValue.cover);
		formData.append('description', this.formCtrlValue.description);
		formData.append('address[street]', this.formCtrlValue.street);
		formData.append('address[provinces]', this.formCtrlValue.provinces);
		formData.append('address[regencies]', this.formCtrlValue.regencies);
		formData.append('address[districts]', this.formCtrlValue.districts);
		formData.append('address[villages]', this.formCtrlValue.villages);
		return formData;
	}

	public delete() {
		this.url = null;
	}

	protected getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

	private markAllFormControlsAsTouched(formGroup: FormGroup) {
		Object.values(formGroup.controls).forEach((control) => {
			control.markAsTouched();
			if (control instanceof FormGroup) {
				this.markAllFormControlsAsTouched(control);
			}
		});
	}
}
