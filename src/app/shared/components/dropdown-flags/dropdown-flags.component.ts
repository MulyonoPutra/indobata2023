import { Component, OnInit } from '@angular/core';

import { LanguageOptions } from 'src/app/core/domain/language-options';
import { TranslateService } from '@ngx-translate/core';
import { languageOptions } from '../../constants/static-value';

@Component({
	selector: 'app-dropdown-flags',
	templateUrl: './dropdown-flags.component.html',
	styleUrls: ['./dropdown-flags.component.scss'],
})
export class DropdownFlagsComponent implements OnInit {
	protected language!: LanguageOptions;
	protected languageOptions = languageOptions;
	protected isShowDropdown: boolean = false;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
		this.setDefaultLanguage();
	}

	protected changeLanguage(lang: string): void {
		this.translate.use(lang);
	}

	protected setDefaultLanguage(): void {
		this.translate.addLangs(['en', 'in']);
		this.translate.setDefaultLang('in');
		const browserLang = this.translate.getBrowserLang()!;
		this.translate.use(browserLang.match(/en|in/) ? browserLang : 'in');

		if (this.languageOptions.length > 0) {
			const [defaultLang] = this.languageOptions;
			this.language = {
				name: defaultLang.name,
				code: defaultLang.code,
				flagUrl: defaultLang.flagUrl,
			};
		}
	}

	protected onLanguageChange(language: LanguageOptions): void {
		this.language = {
			name: language.name,
			code: language.code,
			flagUrl: language.flagUrl,
		};

		this.isShowDropdown = false;
		this.translate.use(language.code);
	}

	protected openDropdown(): void {
		this.isShowDropdown = !this.isShowDropdown;
	}
}
