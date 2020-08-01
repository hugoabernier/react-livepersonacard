import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface ILpcSampleProps {
  testUserName: string;
  testDisplayUser: string;
  testImageUrl: string;
  context: WebPartContext;
}
