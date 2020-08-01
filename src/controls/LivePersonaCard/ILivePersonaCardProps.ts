import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { ServiceScope } from "@microsoft/sp-core-library";
import { ILivePersonaCardUser } from './ILivePersonaCardUser';

export interface ILivePersonaCardProps {
   /**
   * The SPUser for whom you wish to render the live persona card.
   *
   * @remarks
   * Example: You can use `this.props.context.pageContext.user` within a component to pass the current user
   */
  user: ILivePersonaCardUser;

  /**
   * The associated {@link @microsoft/sp-core-library#ServiceScope} for this component
   *
   * @remarks
   * Example: Use `this.props.context.serviceScope` within a component to pass the component's context
   */
  serviceScope: ServiceScope;

  /**
   * Optional additional CSS class(es) to apply to the LivePersonaCard
   */
  className?: string;

  /**
   * Optional properties to render the default persona card when no children are passed
   *
   * If children are passed to the LivePersonaCard, these values will be ignored
   *
   * @defaultvalue [`text` Derived from `user.displayName`]
   * @defaultvalue [`imageUrl` Derived from `user.email`]
   * @defaultvalue [`size` PersonaSize.size48]
   */
  personaProps?: IPersonaProps;

  /**
   * Optional callback for when `LivePersonaCard` is opened
   */
  onCardOpenCallback?: Function;

  /**
   * Optional callback for when `LivePersonaCard` is closed
   */
  onCardCloseCallback?: Function;
}


