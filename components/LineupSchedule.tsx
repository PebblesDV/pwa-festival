"use client";

import { useEffect, useState, useRef } from "react";
import lineup from "../lib/lineup";

type Stage = "poton" | "theLake" | "theClub" | "hanggar";
type Day = "saturday" | "sunday";

interface Performance {
  name: string;
  start: string;
  end: string;
}

const stageNames: Record<Stage, string> = {
  poton: "Poton",
  theLake: "Lake",
  theClub: "Club",
  hanggar: "Hangar",
};

const LineupSchedule = () => {
  const [selectedDay, setSelectedDay] = useState<Day>("sunday");
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update current time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Convert time string to minutes since start of day
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Convert Date to minutes since start of day
  const dateToMinutes = (date: Date): number => {
    return date.getHours() * 60 + date.getMinutes();
  };

  // Convert minutes to position percentage
  const minutesToPosition = (minutes: number): number => {
    const startTime = 10 * 60; // 10:00
    const totalDuration = 13 * 60; // 13 hours (10:00 - 23:00)
    return ((minutes - startTime) / totalDuration) * 100;
  };

  // Calculate width percentage based on duration
  const calculateWidth = (start: string, end: string): number => {
    const startMinutes = timeToMinutes(start);
    const endMinutes = timeToMinutes(end);
    const duration = endMinutes - startMinutes;
    const totalDuration = 13 * 60; // 13 hours
    return (duration / totalDuration) * 100;
  };

  // Scroll to current time on initial load
  useEffect(() => {
    if (timelineRef.current) {
      const currentMinutes = dateToMinutes(currentTime);
      const scrollPosition =
        (minutesToPosition(currentMinutes) / 100) *
        timelineRef.current.scrollWidth;
      timelineRef.current.scrollLeft = Math.max(0, scrollPosition - 100); // 100px offset to show some earlier events
    }
  }, [currentTime]);

  // Format time for display
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Day selector and current time */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              selectedDay === "saturday"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedDay("saturday")}
          >
            Saturday
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedDay === "sunday"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedDay("sunday")}
          >
            Sunday
          </button>
        </div>
        <div className="text-lg font-semibold">
          Current Time: {formatTime(currentTime)}
        </div>
      </div>

      {/* Timeline container with horizontal scroll */}
      <div
        ref={timelineRef}
        className="overflow-x-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="min-w-[1200px]">
          {/* Timeline header */}
          <div className="ml-24 grid grid-cols-27 border-b mb-2">
            {Array.from({ length: 27 }, (_, i) => {
              const hour = Math.floor(i / 2) + 10;
              const minutes = i % 2 === 0 ? "00" : "30";
              return (
                <div key={i} className="text-sm text-gray-600">
                  {hour.toString().padStart(2, "0")}:{minutes}
                </div>
              );
            })}
          </div>

          {/* Stages and performances */}
          <div className="relative">
            {(Object.keys(lineup[selectedDay]) as Stage[]).map((stage) => (
              <div key={stage} className="flex h-16 mb-4 relative">
                {/* Stage name */}
                <div className="w-24 flex items-center font-medium sticky left-0 bg-white z-10">
                  {stageNames[stage]}
                </div>

                {/* Timeline grid */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0 grid grid-cols-26 border-l">
                    {Array.from({ length: 26 }).map((_, i) => (
                      <div key={i} className="border-r h-full"></div>
                    ))}
                  </div>

                  {/* Performances */}
                  {lineup[selectedDay][stage].map(
                    (performance: Performance, index: number) => {
                      const left = minutesToPosition(
                        timeToMinutes(performance.start)
                      );
                      const width = calculateWidth(
                        performance.start,
                        performance.end
                      );

                      return (
                        <div
                          key={index}
                          className="absolute h-12 bg-blue-600 rounded flex items-center justify-center text-white text-sm p-2 cursor-pointer hover:bg-blue-700 transition-colors"
                          style={{
                            left: `${left}%`,
                            width: `${width}%`,
                          }}
                          title={`${performance.name} (${performance.start} - ${performance.end})`}
                        >
                          <span className="truncate">{performance.name}</span>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineupSchedule;
