import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddressModule } from '../components/address';
import { EditorModule } from '../components/editor';
import { FileManagerModule } from '../components/file-manager';
import { FilterInputModule } from '../components/filter-input/filter-input.module';

import { AddressWidget } from './widgets/address/address.widget';
import { EditorWidget } from './widgets/editor/editor.widget';
import { FilterInputWidget } from './widgets/filter-input-widget/filter-input.widget';
import { ImgWidget } from './widgets/img/img.widget';

export const SCHEMA_THIRDS_COMPONENTS = [EditorWidget, ImgWidget, AddressWidget, FilterInputWidget];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DelonFormModule.forRoot(),
    AddressModule,
    EditorModule,
    FileManagerModule,
    NzButtonModule,
    FilterInputModule,
  ],
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  exports: [...SCHEMA_THIRDS_COMPONENTS],
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(EditorWidget.KEY, EditorWidget);
    widgetRegistry.register(ImgWidget.KEY, ImgWidget);
    widgetRegistry.register(AddressWidget.KEY, AddressWidget);
    widgetRegistry.register(FilterInputWidget.KEY, FilterInputWidget);
  }
}
