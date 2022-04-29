export interface Options {
  debug: boolean;
}

export interface AdvancedMatching {
  email: string;
  phone_number: string;
}

export interface Data {}

export interface AddPaymentInfo extends Data {
  content_type?: string;
  content_id: string;
  contents?: object[];
  currency?: string;
  value?: number;
}
export interface AddToCart extends Data {
  content_id: object[] | object;
  description?: string;
  content_type?: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface AddToWishlist extends Data {
  description?: string;
  content_type?: string;
  content_id: object[] | object;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface AddToWishlist extends Data {
  description?: string;
  content_type?: string;
  content_id?: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface ClickButton extends Data {
  description?: string;
  content_type?: string;
  content_id?: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface CompleteRegistration extends Data {
  description?: string;
  currency?: string;
  status?: string;
  value?: number;
}

export interface InitiateCheckout extends Data {
  content_type?: string;
  content_id: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface Contact extends Data {
  content_type?: string;
  content_id: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface Download extends Data {
  content_type?: string;
  content_id: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface CompletePayment extends Data {
  content_id: object[] | object;
  description?: string;
  content_type?: string;
  contents?: object[];
  currency: string;
  value: number;
}

export interface Search extends Data {
  content_type?: string;
  content_id?: object[] | object;
  contents?: object[];
  currency?: string;
  query?: string;
  value?: number;
}

export interface SubmitForm extends Data {
  currency?: string;
  value: number;
  content_id?: string;
  contents?: object[];
}

export interface Subscribe extends Data {
  currency?: string;
  value: number;
  content_id?: string;
  contents?: object[];
}

export interface ViewContent extends Data {
  content_id: string[] | string;
  description?: string;
  content_type?: string;
  contents?: object[];
  currency?: string;
  value?: number;
}

export interface TrackingOptions extends Data {
  event_id: string;
}

export function init(
  pixelId: string,
  advancedMatching?: AdvancedMatching,
  options?: Options,
): void;
export function pageView(): void;
export function track(
  title: string,
  data?: Data | any,
  options?: TrackingOptions | any,
): void;
