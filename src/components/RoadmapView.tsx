import React, { useState } from 'react';
import { ROADMAP_PHASES, RoadmapPhase } from '../data/marketData';
import { CheckSquare, Square, Calendar, ArrowRight, ShieldAlert, CheckCircle2, DollarSign } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const totalTasks = ROADMAP_PHASES.reduce((acc, p) => acc + p.actionItems.length, 0);
  const doneCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = Math.round((doneCount / totalTasks) * 100);

  return (
    <div className="space-y-12 py-6">
      {/* Chapter header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
          <span>Chapter 06</span>
          <span aria-hidden="true">·</span>
          <span>Execution Roadmap (Day 1 - 180)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 tracking-tight">
          0-180天极简低成本落地路线图与执行清单
        </h2>
        <p className="text-stone-600 text-sm mt-2 max-w-3xl leading-relaxed">
          以“验证先于开模、社群先于砸广、寄售先于大仓”为底层原则，首期仅需 1 万余元启动本金，实现闭环自造血滚动扩产。
        </p>
      </div>

      {/* Progress & Budget Summary Header */}
      <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span className="text-xs text-stone-500 font-mono uppercase">Overall Execution Progress</span>
          <div className="flex items-baseline gap-3 mt-1">
            <span className="text-3xl font-display font-bold text-stone-900 tabular-nums">
              {doneCount} / {totalTasks}
            </span>
            <span className="text-sm font-semibold text-emerald-700">
              已完成 {progressPercent}%
            </span>
          </div>
          <div className="w-48 sm:w-64 bg-stone-100 h-2 rounded-full overflow-hidden mt-2">
            <div
              className="bg-stone-900 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs border-t sm:border-t-0 sm:border-l border-stone-200 sm:pl-6">
          <div>
            <span className="text-stone-500 block">第一期试错本金</span>
            <span className="font-bold text-stone-900 text-sm tabular-nums">¥3,500 - 5,000</span>
          </div>
          <div>
            <span className="text-stone-500 block">第二期小批启动</span>
            <span className="font-bold text-stone-900 text-sm tabular-nums">¥7,000 - 12,000</span>
          </div>
          <div>
            <span className="text-stone-500 block">目标首年纯利</span>
            <span className="font-bold text-emerald-800 text-sm tabular-nums">150,000+ NOK</span>
          </div>
        </div>
      </div>

      {/* 4 Phases Timeline Container */}
      <div className="space-y-8">
        {ROADMAP_PHASES.map((phase) => (
          <div
            key={phase.phaseNumber}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs"
          >
            {/* Phase Header Strip */}
            <div className="bg-stone-50/80 p-5 sm:p-6 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                  <span className="px-2 py-0.5 rounded bg-stone-200/80 text-stone-800 font-bold">
                    PHASE 0{phase.phaseNumber}
                  </span>
                  <span className="flex items-center gap-1 text-stone-600 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{phase.timeframe}</span>
                  </span>
                  <span>· 预算预估：{phase.budgetEstRMB}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-stone-900">
                  {phase.titleZh}
                </h3>
                <p className="text-xs text-stone-500 italic">{phase.titleEn}</p>
              </div>

              <div className="text-xs text-stone-600 max-w-sm bg-white p-3 rounded-lg border border-stone-200">
                <span className="font-semibold text-stone-900 block mb-0.5">核心战略目标</span>
                <p className="leading-relaxed">{phase.objective}</p>
              </div>
            </div>

            {/* Action Items List */}
            <div className="p-5 sm:p-6 divide-y divide-stone-100">
              {phase.actionItems.map((item) => {
                const isDone = !!completedTasks[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleTask(item.id)}
                    className="py-4 first:pt-0 last:pb-0 flex items-start gap-3.5 cursor-pointer group hover:bg-stone-50/50 -mx-3 px-3 rounded-xl transition-colors"
                  >
                    <button
                      type="button"
                      className="mt-0.5 text-stone-400 group-hover:text-stone-700 transition-colors shrink-0"
                    >
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-700" />
                      ) : (
                        <Square className="w-5 h-5" />
                      )}
                    </button>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold transition-colors ${
                          isDone ? 'line-through text-stone-400' : 'text-stone-900'
                        }`}>
                          {item.task}
                        </span>
                      </div>
                      <p className={`text-xs leading-relaxed ${
                        isDone ? 'text-stone-400' : 'text-stone-600'
                      }`}>
                        {item.subtext}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-3xs sm:text-xs">
                        <div className="p-2 bg-stone-50 rounded border border-stone-100 text-stone-600">
                          <span className="font-semibold text-stone-800">交付物标准：</span>
                          <span>{item.deliverable}</span>
                        </div>
                        <div className="p-2 bg-stone-50 rounded border border-stone-100 text-stone-600">
                          <span className="font-semibold text-stone-800">避坑与风控：</span>
                          <span>{item.riskMitigation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
