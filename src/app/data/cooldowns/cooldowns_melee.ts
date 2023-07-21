/*
 * Copyright (c) 2023 D2ArmorPicker by Mijago.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { EnumDictionary } from "../types/EnumDictionary";
import { CharacterClass } from "../enum/character-Class";

export const MeleeAbilitiesPerClassAndTier: EnumDictionary<CharacterClass, string[]> = {
  [CharacterClass.Titan]: [
    "战栗打击", // 1:53
    "", // 1:49
    "", // 1:46
    "圣盾投掷", // 1:40
    "投掷飞锤, 战锤打击, 圣盾猛击, 地震打击, 弹道猛击, 雷霆一击", // 1:30
    "", // 1:22
    "", // 0:15
  ],
  [CharacterClass.Hunter]: [
    "枯萎之刃", // 1:53
    "权衡飞刀", // 1:49
    "", // 1:46
    "感应爆炸飞刀, 裂空打击, 迷失一击", // 1:40
    "轻质飞刀, 陷阱炸弹", // 1:30
    "飞刀戏法", // 1:22
    "组合打击", // 0:15
  ],
  [CharacterClass.Warlock]: [
    "半影冲击, 球形闪电", // 1:53
    "", // 1:49
    "", // 1:46
    "星界之火", // 1:40
    "焚烧响指, 口袋奇点, 连锁闪电", // 1:30
    "", // 1:22
    "", // 0:15
  ],
  [CharacterClass.None]: ["", "", "", "", "", "", "", "", "", "", ""],
};
