import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <div>Hello, World! I'm {this.getText()}</div>
        <div class="r-mb-4">
          <ion-button>Click Me</ion-button>
        </div>
        <div>
          <raul-alert heading="Information Alert" content={`Hello ${this.getText()}`} rounded variant="information" />
        </div>
      </div>
    );
  }
}
