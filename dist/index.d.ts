declare const TiktokPixel: {
    init(pixelId: string, advancedMatching?: AdvancedMatching, options?: DebugOptions): Promise<void>;
    pageView(): void;
    track(event: TiktokEvent, data?: TiktokParams | undefined, options?: DebugOptions): void;
};
export default TiktokPixel;
