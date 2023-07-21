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

export const GrenadeAbilitiesPerClassAndTier: EnumDictionary<CharacterClass, string[]> = {
  [CharacterClass.Titan]: [
    "粘性电浆手雷", // 182
    "冰川手雷, 量子光束", // 152 / 2:32
    "急冻手雷, 涡流手雷, 散射手雷, 磁性手雷, 抑制手雷, 燃烧手雷, 烈日手雷, 闪电手雷, 脉冲手雷, 弹跳手雷", // 121 / 2:01
    "虚空墙壁, 铝热手雷, 电光手雷, 风暴手雷", // 105 / 1:45
    "虚空尖刺, 感应手雷, 蜂群手雷, 闪光手雷", // 91 / 1:31
    "治愈手雷", // 82 / 1:22
    "融合手雷", // 73 / 1:13
    "暮域手雷, 烈焰手雷", // 64 / 1:04
  ],
  [CharacterClass.Hunter]: [
    "粘性电浆手雷", // 182 / 3:02
    "冰川手雷, 量子光束", // 152 / 2:32
    "急冻手雷, 涡流手雷, 散射手雷, 磁性手雷, 抑制手雷, 燃烧手雷, 烈日手雷, 闪电手雷, 脉冲手雷, 弹跳手雷", // 121 / 2:01
    "虚空墙壁, 铝热手雷, 电光手雷, 风暴手雷", // 105 / 1:45
    "虚空尖刺, 感应手雷, 蜂群手雷, 闪光手雷", // 91 / 1:31
    "治愈手雷", // 82 / 1:22
    "融合手雷", // 73 / 1:13
    "暮域手雷, 烈焰手雷", // 64 / 1:04
  ],
  [CharacterClass.Warlock]: [
    "粘性电浆手雷", // 182
    "冰川手雷, 量子光束", // 152 / 2:32
    "急冻手雷, 涡流手雷, 散射手雷, 磁性手雷, 抑制手雷, 燃烧手雷, 烈日手雷, 闪电手雷, 脉冲手雷, 弹跳手雷", // 121 / 2:01
    "虚空墙壁, 铝热手雷, 电光手雷, 风暴手雷", // 105 / 1:45
    "虚空尖刺, 感应手雷, 蜂群手雷, 闪光手雷", // 91 / 1:31
    "治愈手雷", // 82 / 1:22
    "融合手雷", // 73 / 1:13
    "暮域手雷, 烈焰手雷", // 64 / 1:04
  ],
  [CharacterClass.None]: ["", "", "", "", "", "", "", "", "", ""],
};
