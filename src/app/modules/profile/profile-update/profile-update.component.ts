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
	Villages,
} from 'src/app/core/domain/address';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { User } from 'src/app/core/domain/user';
import { AddressService } from 'src/app/core/services/address.service';
import { UserService } from 'src/app/core/services/user.service';
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

	protected dropdownProvince!: Province[];
	protected dropdownRegencies!: Regencies[];
	protected dropdownDistricts!: Districts[];
	protected dropdownVillages!: Villages[];

	protected provinceIdentity!: string;
	protected regencyIdentity!: string;
	protected districtIdentity!: string;
	protected villageIdentity!: string;

	url: any = '';

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private userService: UserService,
		private addressService: AddressService,
		private validator: ValidatorsService
	) {}

	ngOnInit(): void {
		this.fetchData();
	}

	fetchData(): void {
		this.getUserInfo();
		this.formInitialized();
		this.getProvinces();
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
	protected onReceiveProvinceId(id: string) {
		this.provinceIdentity = id;
		this.getRegencies(id);
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = regency id
	 */
	protected onReceiveRegencyId(id: string) {
		console.log(id);
		this.regencyIdentity = id;
		this.getDistricts(id);
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = district id
	 */
	protected onReceiveDistrictId(id: string) {
		this.districtIdentity = id;
		this.getVillages(id);
	}

	/**
	 * Receive from child component (app-dropdown)
	 * @param id = village id
	 */
	protected onReceiveVillageId(id: string) {
		this.villageIdentity = id;
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
			villages: ['', Validators.required],
			regencies: ['', Validators.required],
			districts: ['', Validators.required],
			provinces: ['', Validators.required],
		});
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

	onSelectFile(event: Event) {
		if (event.target instanceof HTMLInputElement) {
			const file = event.target.files?.[0];
			let reader = new FileReader();

			reader.readAsDataURL(file!);

			reader.onload = (event) => {
				this.url = event?.target?.result;
				console.log(this.url);
			};
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
			this.form.reset();
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
