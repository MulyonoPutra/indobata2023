import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

	protected dropdownProvince!:  Province[];
	protected dropdownRegencies!: Regencies[];
	protected dropdownDistricts!: Districts[];
	protected dropdownVillages!:  Villages[];

	protected provinceIdentity!:  string;
	protected regencyIdentity!:   string;
	protected districtIdentity!:  string;
	protected villageIdentity!:   string;

  protected selectedFile: File | null = null;
  protected preview: string | ArrayBuffer | null = null;

  protected coverImage: File  | null = null;
  protected avatarImage: File | null = null;

	url: any = '';

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private userService: UserService,
		private addressService: AddressService,
		private validator: ValidatorsService,
		private capitalize: CapitalizePipe
	) {}

	ngOnInit(): void {
		this.fetchData();
	}

	fetchData(): void {
		this.getUserInfo();
		this.formInitialized();
		this.getProvinces();
	}

	/**
	 * Form builder initialization
	 *
	 */
	private formInitialized(): void {
		this.form = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(6)]],
			phone: [
				'',
				[Validators.required, this.validator.indonesianPhoneNumber()],
			],
			dob: ['', Validators.required],
			avatar: [''],
			cover: [''],
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
				console.log(response.data);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = province id
	 */
	protected onReceiveProvinceId(region: Region) {
		this.provinceIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('provinces')?.setValue(regionName);
		this.getRegencies(region.id);
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = regency id
	 */
	protected onReceiveRegencyId(region: Region) {
		this.regencyIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('regencies')?.setValue(regionName);
		this.getDistricts(region.id);
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = district id
	 */
	protected onReceiveDistrictId(region: Region) {
		this.districtIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('districts')?.setValue(regionName);
		this.getVillages(region.id);
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = village id
	 */
	protected onReceiveVillageId(region: Region) {
		this.villageIdentity = region.id;

		const regionName = this.capitalize.transform(region.name);
		this.form.get('villages')?.setValue(regionName);
	}

	/**
	 * Get form builder value
	 */
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

	onSelectFile(event: Event, imageType: string) {

		const inputElement = event.target as HTMLInputElement;
    const maxSize = 1048576;
    const allowedFileTypes = ['image/jpeg', 'image/png'];

		if (inputElement.files && inputElement.files.length > 0) {
			const file = inputElement.files[0];

			if (file.size <= maxSize && allowedFileTypes.includes(file.type)) {
				this.selectedFile = file;

        this.preview = URL.createObjectURL(file);

        if (imageType === 'cover') {
          this.coverImage = file;
          this.form.get('cover')?.setValue(this.coverImage);
        } else if (imageType === 'avatar') {
          this.avatarImage = file;
          this.form.get('avatar')?.setValue(this.avatarImage);
        }
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
			console.log(this.formCtrlValue);

			// this.form.reset();
		} else {
			this.markAllFormControlsAsTouched(this.form);
		}
	}

	submit(): void {
		// this.userService.update()
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
