import * as React from 'react';
import styles from './LpcSample.module.scss';
import { ILpcSampleProps } from './ILpcSampleProps';
import { LivePersonaCard } from '../../../controls/LivePersonaCard';

export default class LpcSample extends React.Component<ILpcSampleProps, {}> {
  public render(): React.ReactElement<ILpcSampleProps> {
    return (
      <div className={ styles.lpcSample }>
        <h3>Current user's LivePersonaCard with custom child element</h3>
<LivePersonaCard
  user={this.props.context.pageContext.user}
  serviceScope={this.props.context.serviceScope}
>
  <div>{this.props.context.pageContext.user.displayName}</div>
</LivePersonaCard>

<h3>LivePersonaCard with no children -- renders default persona card</h3>
<LivePersonaCard
  user={this.props.context.pageContext.user}
  serviceScope={this.props.context.serviceScope}
/>

<h3>LivePersonaCard with custom persona props</h3>
<LivePersonaCard
  user={this.props.context.pageContext.user}
  serviceScope={this.props.context.serviceScope}
  personaProps={{
    text: 'User McUserface',
    imageUrl: 'https://robohash.org/blanditiisadlabore.png?size=50x50&set=set1',
    imageInitials: '?'
  }}
 />

<h3>LivePersonaCard with external user</h3>
<LivePersonaCard
  serviceScope={this.props.context.serviceScope}
  user={{
    displayName: 'Hugo Bernier',
    email: 'hugoabernier@fakeemail.com',
  }}
  personaProps={{
    imageUrl: 'https://twitter.com/bernierh/photo',
    secondaryText: 'Not my real email'
  }}
 />

<h3>LivePersonaCard with test user</h3>
{ this.props.testDisplayUser && this.props.testUserName ?
  <LivePersonaCard
  serviceScope={this.props.context.serviceScope}
  user={{
    displayName: this.props.testDisplayUser,
    email: this.props.testUserName,
  }}
  personaProps={{
    imageUrl: this.props.testImageUrl,
    secondaryText: 'Not my real email'
  }}
 />
 : <span>Enter a test user name and email address to test this</span>
}

      </div>
    );
  }
}
