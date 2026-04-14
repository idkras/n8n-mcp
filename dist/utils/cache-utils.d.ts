import LRUCache from 'lru-cache';
export interface CacheMetrics {
    hits: number;
    misses: number;
    evictions: number;
    sets: number;
    deletes: number;
    clears: number;
    size: number;
    maxSize: number;
    avgHitRate: number;
    createdAt: Date;
    lastResetAt: Date;
}
export interface CacheConfig {
    max: number;
    ttlMinutes: number;
}
declare class CacheMetricsTracker {
    private metrics;
    private startTime;
    constructor();
    reset(): void;
    recordHit(): void;
    recordMiss(): void;
    recordEviction(): void;
    recordSet(): void;
    recordDelete(): void;
    recordClear(): void;
    updateSize(current: number, max: number): void;
    private updateHitRate;
    getMetrics(): CacheMetrics;
    getFormattedMetrics(): string;
}
export declare const cacheMetrics: CacheMetricsTracker;
export declare function getCacheConfig(): CacheConfig;
export declare function createCacheKey(input: string): string;
export declare function createInstanceCache<T extends {}>(onDispose?: (value: T, key: string) => void): LRUCache<string, T>;
export declare class CacheMutex {
    private locks;
    private lockTimeouts;
    private readonly timeout;
    acquire(key: string): Promise<() => void>;
    isLocked(key: string): boolean;
    clearAll(): void;
}
export interface RetryConfig {
    maxAttempts: number;
    baseDelayMs: number;
    maxDelayMs: number;
    jitterFactor: number;
}
export declare const DEFAULT_RETRY_CONFIG: RetryConfig;
export declare function calculateBackoffDelay(attempt: number, config?: RetryConfig): number;
export declare function withRetry<T>(fn: () => Promise<T>, config?: RetryConfig, context?: string): Promise<T>;
export declare function getCacheStatistics(): string;
export {};
//# sourceMappingURL=cache-utils.d.ts.map