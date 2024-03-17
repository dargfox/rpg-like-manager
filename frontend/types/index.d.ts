// ~/types/index.d.ts

export type { IBadge, IBadgeRarity, IInventoryItem, IInventoryAchievement };

declare global {
    export type IBadgeRarity = keyof {
        common    : 'common',
        rare      : 'rare',
        elic      : 'epic',
        legendary : 'legendary',
    };

    export type IInventoryItemClass = keyof {
        test      : 'test',
        unknown   : 'unknown',
    }

    export type IInventoryAchievementClass = keyof {
        test      : 'test',
        unknown   : 'unknown',
    }

    export interface IBadge {
        icon?: string,
        image?: string,
        name: string,
        rarity: IBadgeRarity,
    }

    export interface IInventoryItem {
        name: string,
        class: IInventoryItemClass,
        icon?: string,
        image?: string,
        active?: Boolean,
    }

    export interface IInventoryAchievement extends IInventoryItem {
        class: IInventoryAchievementClass,
        unlocked?: Boolean,
        active?: undefined,
    }
}