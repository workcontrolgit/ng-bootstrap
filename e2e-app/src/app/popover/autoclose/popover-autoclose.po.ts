import {$} from 'protractor';
import {rightClick} from '../../tools.po';

export class PopoverAutoClosePage {
  async clickOutside() { await $('#outside-button').click(); }

  getOpenStatus() { return $('#open-status'); }

  getPopover() { return $('ngb-popover-window'); }

  getPopoverContent() { return this.getPopover().$('div.popover-body'); }

  async openPopover() {
    await $('button[ngbPopover]').click();
    expect(await this.getPopover().isPresent()).toBeTruthy(`Popover should be visible`);
  }

  async rightClickOutside() { await rightClick($('#outside-button')); }

  async selectAutoClose(type: string) {
    await $('#autoclose-dropdown').click();
    await $(`#autoclose-${type}`).click();
  }
}
