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

import { Component, OnDestroy, OnInit } from "@angular/core";
import { ConfigurationService } from "../../../../services/configuration.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { environment } from "../../../../../environments/environment";

interface AdvancedSettingField {
  name: string;
  value: boolean;
  cp: (v: boolean) => void;
  help: string | undefined;
  disabled: boolean;
  impactsResultCount: boolean;
}

@Component({
  selector: "app-advanced-settings",
  templateUrl: "./advanced-settings.component.html",
  styleUrls: ["./advanced-settings.component.scss"],
})
export class AdvancedSettingsComponent implements OnInit, OnDestroy {
  fields2: { [id: string]: AdvancedSettingField[] } = {};
  fieldKeys: string[] = [];

  constructor(private config: ConfigurationService) {}

  ngOnInit(): void {
    this.config.configuration.pipe(takeUntil(this.ngUnsubscribe)).subscribe((c) => {
      this.fields2 = {
        事件: [
          {
            name: "强制使用英灵日面具",
            cp: (v: boolean) => this.config.modifyConfiguration((c) => (c.useFotlArmor = v)),
            value: c.useFotlArmor,
            disabled: false,
            impactsResultCount: true,
            help: "仅对英灵日面具有效，如果你没有英灵日面具，那生成结果不会有任何变化",
          },
        ],
        护甲选择: [
          {
            name: "允许使用除异域护甲和传说护甲以外的其他护甲",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.allowBlueArmorPieces = v)),
            value: c.allowBlueArmorPieces,
            disabled: false,
            impactsResultCount: false,
            help: "此设置允许你使用蓝绿白装。",
          },
          {
            name: "忽略日落护甲",
            cp: (v: boolean) => this.config.modifyConfiguration((c) => (c.ignoreSunsetArmor = v)),
            value: c.ignoreSunsetArmor,
            disabled: false,
            impactsResultCount: false,
            help: "生成结果中忽略日落护甲",
          },
        ],
        大师杰作: [
          {
            name: "假设所有传说护甲都升级到了大师杰作",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.assumeLegendariesMasterworked = v)),
            value: c.assumeLegendariesMasterworked,
            disabled: false,
            impactsResultCount: false,
            help: undefined,
          },
          {
            name: "假设所有异域护甲都升级到了大师杰作",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.assumeExoticsMasterworked = v)),
            value: c.assumeExoticsMasterworked,
            disabled: false,
            impactsResultCount: false,
            help: "如果启用此设置，D2AP 会将所有未升级到大师的金装视为已升级到大师。",
          },
          {
            name: "假设所有职业物品都升级到了大师杰作",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.assumeClassItemMasterworked = v)),
            value: c.assumeClassItemMasterworked,
            disabled: false,
            impactsResultCount: false,
            help: "如果启用此设置，D2AP 会给职业物品的每个属性都 +2。",
          },
          {
            name: "仅使用已经升级到大师杰作的护甲",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.onlyUseMasterworkedItems = v)),
            value: c.onlyUseMasterworkedItems,
            disabled: false,
            impactsResultCount: true,
            help: undefined,
          },
        ],
        性能优化: [
          {
            name: "使用安全策略防止应用崩溃（刷新页面时设置重置）。",
            cp: (v: boolean) => this.config.modifyConfiguration((c) => (c.limitParsedResults = v)),
            value: c.limitParsedResults,
            disabled: false,
            impactsResultCount: true,
            help: "仅展示前 3000 条生成结果，关闭此设置会将展示条目限制在 1000000 条，这可能会导致应用崩溃。请注意，启用此设置并不会使你错过最佳 bd 组合。",
          },
          {
            name: "执行进一步的优化",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.executeModOptimization = v)),
            value: c.executeModOptimization,
            disabled: false,
            impactsResultCount: true,
            help: "选择模组时执行进一步的优化，这会增加计算所需的时间。",
          },
        ],
        其他设置: [
          {
            name: "展示可达到的最高属性而不是实际属性",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.showPotentialTierColumn = v)),
            value: c.showPotentialTierColumn,
            disabled: false,
            impactsResultCount: false,
            help: "在结果列表中新增一列，显示如果使用所有属性模组 build 将达到的最高阶。",
          },
          {
            name: "新增一列展示属性浪费情况",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.showWastedStatsColumn = v)),
            value: c.showWastedStatsColumn,
            disabled: false,
            impactsResultCount: false,
            help: "在结果列表中新增一列，显示 build 的属性浪费情况。",
          },
        ],
        属性浪费: [
          {
            name: "尝试优化属性浪费",
            cp: (v: boolean) => this.config.modifyConfiguration((c) => (c.tryLimitWastedStats = v)),
            value: c.tryLimitWastedStats,
            disabled: false,
            impactsResultCount: false,
            help: "D2AP 将尝试使用小型属性模组以减少属性浪费。",
          },
          {
            name: "仅显示零浪费的 build",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.onlyShowResultsWithNoWastedStats = v)),
            value:
              environment.featureFlags.enableZeroWaste &&
              c.tryLimitWastedStats &&
              c.onlyShowResultsWithNoWastedStats,
            disabled: !c.tryLimitWastedStats || !environment.featureFlags.enableZeroWaste,
            impactsResultCount: true,
            help: "这意味着很可能没有任何结果",
          },
        ],
        数据科学: [
          {
            name: "对结果使用 +1 韧性（刷新后重置）",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.addConstent1Resilience = v)),
            value: c.addConstent1Resilience,
            disabled: false,
            impactsResultCount: false,
            help: "通常用不上",
          },
          {
            name: "假设紫装都是诡计护甲",
            cp: (v: boolean) =>
              this.config.modifyConfiguration((c) => (c.assumeEveryLegendaryIsArtifice = v)),
            value: c.assumeEveryLegendaryIsArtifice,
            disabled: false,
            impactsResultCount: true,
            help: "调试用，刷新页面将重置。",
          },
        ],
      };
      this.fieldKeys = Object.keys(this.fields2);
    });
  }

  private ngUnsubscribe = new Subject();

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
