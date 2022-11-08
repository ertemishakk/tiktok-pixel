declare const TiktokPixel: {
    init(pixelId: string, advancedMatching?: {}, options?: {
        debug: boolean;
    }): Promise<void>;
    pageView(): void;
    track(event: TiktokEvent, data: TiktokParams, options?: DebugOptions): void;
};
export default TiktokPixel;
