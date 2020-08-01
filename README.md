# LivePersonaCard control

Adds the out-of-the-box Office 365 live persona card to any element in your page.

Profile information is automatically provided by the live persona card.

![LivePersonaCard control output](./assets/LivePersonaCard.gif)

> **NOTE:** The control provided in this solution is intended for sample purposes only. It is not supported (or recommended) for use in production solutions, as Microsoft may change how the LivePersonaCard control is implemented at any time, without notice.
> Don't say I didn't warn you.

## How to use this control in your solutions

- Copy the files from the `controls/LivePersonaCard` in your solution. 

```typescript
import { LivePersonaCard } from '../../../controls/LivePersonaCard';
```

- Use the `LivePersonaCard` control in your code as follows:

```typescript
// To show the current user's live persona card around text displaying their name
<LivePersonaCard
  user={this.props.context.pageContext.user}
  serviceScope={this.props.context.serviceScope}
>
  <!-- You can put any valid HTML inside -->
  <div>{this.props.context.pageContext.user.displayName}</div>
</LivePersonaCard>

// If you do not pass elements within the live person card, it will automatically
// attempt to render a default person card. It will retrieve the user's name, email
// and profile image from the `user` prop.
<h3>LivePersonaCard with no children -- renders default persona card</h3>
<LivePersonaCard
  user={this.props.context.pageContext.user}
  serviceScope={this.props.context.serviceScope}
/>

// You can also override the persona by passing custom properties
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

// You can display a live persona card for any users, not just the current user
//  -- including external users. Just pass the user's display name and email
<h3>LivePersonaCard with external user</h3>
<LivePersonaCard
  serviceScope={this.props.context.serviceScope}
  user={{
    displayName: 'Hugo Bernier',
    email: 'hugoabernier@fakeemail.com',
  }}
  personaProps={{
    imageUrl: 'https://twitter.com/bernierh/photo',
    secondaryText: 'Not his real email'
  }}
 />

```

The code above will render the following:
![LivePersonaCard code sample output](./assets/LivePersonaCardSample.png)

## Implementation

The `LivePersonaCard` component can be configured with the following properties:

| Property | Type | Required | Description |
| ---- | ---- | ---- | ---- |
| className | string | no | Optional additional CSS class(es) to apply to the LivePersonaCard. |
| onCardCloseCallback | Function | no | Optional callback for when `LivePersonaCard` is closed |
| onCardOpenCallback | Function | no | Optional callback for when `LivePersonaCard` is opened |
| personaProps | IPersonaProps | no | Optional properties to render the default persona card when no children are passed. If children are passed to the LivePersonaCard, this value will be ignored. |
| serviceScope | ServiceScope | yes | The associated `ServiceScope` for this component. Simply use `this.props.context.serviceScope` from most components. |
| user | ILivePersonaCardUser | yes | The user for whom you wish to render the live persona card. You can use `this.props.context.pageContext.user` to display the current user, or pass `displayName` and `email` or `loginName` for any other user |

### `ILivePersonaCardUser` interface

| Property | Type | Required | Description |
| ---- | ---- | ---- | ---- |
| displayName | string | yes | The display name for the current user. E.g.: `"John Doe"` |
| email | string | no | The email address for the current user. E.g.: `"example@contoso.com"`. You must specify either an `email` or a `loginName` |
| isExternalGuestUser | boolean | no | Returns if the current user is an anonymous guest. Reserved for future use |
| loginName | string | no | The login name for current user. E.g.: on-premise user: `"domain\user"`, online user: `"user@domain.com"`. You must specify either a `loginName`' or an `email`|

![](https://telemetry.sharepointpnp.com/sp-dev-fx-controls-react/wiki/controls/LivePersonaCard)
