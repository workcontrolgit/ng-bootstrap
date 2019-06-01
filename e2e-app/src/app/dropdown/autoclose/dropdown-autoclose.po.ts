import {$, ElementFinder} from 'protractor';
import {rightClick} from '../../tools.po';

export class DropdownAutoClosePage {
  async clickOutside() { await $('#outside-button').click(); }

  getDropdown(dropDownSelector = '') { return $(`${dropDownSelector}[ngbDropdown]`); }

  getDropdownItem(item: number) { return $(`#item-${item}`); }

  getFormInput(dropdown: ElementFinder) { return dropdown.$(`input`); }

  getFirstItem(dropdown: ElementFinder) { return dropdown.$$(`.dropdown-item`).first(); }

  getOpenStatus() { return $('#open-status'); }

  async rightClickOutside() { await rightClick($('#outside-button')); }

  async open(dropdown: ElementFinder) {
    await dropdown.$(`button[ngbDropdownToggle]`).click();
    expect(await this.isOpened(dropdown)).toBeTruthy(`Dropdown should have been opened`);
  }

  async selectAutoClose(type: string) {
    await $('#autoclose-dropdown').click();
    await $(`#autoclose-${type}`).click();
  }

  async isOpened(dropdown: ElementFinder) {
    const classNames = await dropdown.getAttribute('class');
    return classNames.includes('show');
  }
}
