import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'LpcSampleWebPartStrings';
import LpcSample from './components/LpcSample';
import { ILpcSampleProps } from './components/ILpcSampleProps';

export interface ILpcSampleWebPartProps {
  username: string;
  displayName: string;
  imageUrl: string;
}

export default class LpcSampleWebPart extends BaseClientSideWebPart<ILpcSampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ILpcSampleProps> = React.createElement(
      LpcSample,
      {
        testUserName: this.properties.username,
        testDisplayUser: this.properties.displayName,
        testImageUrl: this.properties.imageUrl,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('displayName', {
                  label: "Display name"
                }),
                PropertyPaneTextField('username', {
                  label: strings.UserNameFieldLabel
                }),
                PropertyPaneTextField('imageUrl', {
                  label: "Image url"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
