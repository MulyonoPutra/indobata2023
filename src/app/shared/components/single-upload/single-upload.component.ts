import { Component, EventEmitter, Output } from '@angular/core';

import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-single-upload',
	templateUrl: './single-upload.component.html',
	styleUrls: ['./single-upload.component.scss'],
})
export class SingleUploadComponent {
	protected icon = pathAssets.iconUpload;

	@Output() fileUploaded = new EventEmitter<File>();

	upload!: string; // Placeholder for the uploaded file

	onUpload(event: Event): void {
		const files = (event.target as HTMLInputElement).files;
		if (files && files.length > 0) {
			const file = files[0];
			this.fileUploaded.emit(file);
			this.upload = URL.createObjectURL(file);
		}
	}
}
