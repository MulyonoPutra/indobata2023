import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface LanguageOptions {
	name: string;
	code: string;
	flagUrl: string;
}

@Component({
	selector: 'app-dropdown-flags',
	templateUrl: './dropdown-flags.component.html',
	styleUrls: ['./dropdown-flags.component.scss'],
})
export class DropdownFlagsComponent implements OnInit {
	language!: LanguageOptions;
	@Input() selectedLanguage!: string;
	@Output() selectedLanguageChange: EventEmitter<any> = new EventEmitter<any>();

	ngOnInit(): void {
		this.setDefaultLanguage();
	}

	setDefaultLanguage() {
		this.language = {
			name: 'English',
			code: 'en',
			flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg',
		};
	}

	languageOptions: LanguageOptions[] = [
		{
			code: 'en',
			name: 'English',
			flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg',
		},
		{
			code: 'id',
			name: 'Indonesia',
			flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
		},
	];

	onLanguageChange(language: LanguageOptions) {
		this.language = {
			name: language.name,
			code: language.code,
			flagUrl: language.flagUrl,
		};

		this.selectedLanguageChange.emit(language);
	}
}
