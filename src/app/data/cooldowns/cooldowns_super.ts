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

export const SuperAbilitiesPerClassAndTier: EnumDictionary<CharacterClass, string[]> = {
  [CharacterClass.Titan]: [
    "烈焰战锤", // 10:25
    "冰川震击, 哨兵圣盾, 浩劫之拳", // 9:16
    "燃烧锻锤, 雷霆冲击", // 8:20
    "", // 7:35
    "黎明护罩", // 6:57
  ],
  [CharacterClass.Hunter]: [
    "鬼灵利刃", // 10:25
    "电弧法杖, 黄金枪", // 9:16
    "暗影箭矢：莫比乌斯箭袋", // 8:20
    "暗影箭矢：狩猎陷阱, 利刃弹幕, 沉默狂啸", // 7:35
    "", // 6:57
  ],
  [CharacterClass.Warlock]: [
    "黎明", // 10:25
    "雷霆万钧, 混沌之触, 新星折跃, 严冬之怒", // 9:16
    "新星炸弹", // 8:20
    "", // 7:35
    "光焰之井", // 6:57
  ],
  [CharacterClass.None]: ["", "", "", "", "", "", "", "", "", "", ""],
};
