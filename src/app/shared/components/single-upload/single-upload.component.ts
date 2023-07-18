import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ImagesPreview } from 'src/app/core/domain/images-preview';
import { StaticImages } from '../../constants/static-images';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-single-upload',
	templateUrl: './single-upload.component.html',
	styleUrls: ['./single-upload.component.scss'],
})
export class SingleUploadComponent {
  
	@Output() fileUploaded = new EventEmitter<File>();
  @Input() isSubmitting!: boolean;

	readonly icon = pathAssets.iconUpload;
	readonly closeIcon = pathAssets.iconClosed;
  readonly uploadImages = StaticImages.upload;
	readonly maxSize: number = 1048576;
	readonly allowedFileTypes: string[] = ['image/jpeg', 'image/png'];

	images: ImagesPreview | null = null;

	upload(event: Event): void {
		const files = (event.target as HTMLInputElement).files;
		if (files && files.length > 0) {
			const file = files[0];
			if (file.size <= this.maxSize && this.allowedFileTypes.includes(file.type)) {
				if (file) {
					this.images = {
						preview: URL.createObjectURL(file),
						name: file.name,
						size: file.size,
					};
				}
				this.fileUploaded.emit(file);
			} else {
				alert('File size exceeds the maximum allowed size');
			}
		}
	}

	remove(event: Event): void {
		event?.preventDefault();
    this.images = null;
	}
}
