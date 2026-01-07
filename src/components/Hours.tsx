import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Monday-Friday: 07:30-12:00, 13:00-17:30 (17:00 on Friday)
  // Saturday-Sunday: Closed
  const schedule = [
    { day: t.hours.days[0], morning: "07:30 - 12:00", afternoon: "13:00 - 17:30" },
    { day: t.hours.days[1], morning: "07:30 - 12:00", afternoon: "13:00 - 17:30" },
    { day: t.hours.days[2], morning: "07:30 - 12:00", afternoon: "13:00 - 17:30" },
    { day: t.hours.days[3], morning: "07:30 - 12:00", afternoon: "13:00 - 17:30" },
    { day: t.hours.days[4], morning: "07:30 - 12:00", afternoon: "13:00 - 16:00" },
    { day: t.hours.days[5], closed: true },
    { day: t.hours.days[6], closed: true },
  ];

  const todayIndex = [6, 0, 1, 2, 3, 4, 5][new Date().getDay()];
  const isOpen = todayIndex < 5;

  return (
    <section id="hours" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl"
        >
          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg text-primary">
                {t.hours.header}
              </span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 ${isToday ? "bg-primary/5" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                        <div>
                          <span
                            className={`block text-sm ${
                              isToday
                                ? "font-semibold text-primary"
                                : "text-foreground"
                            }`}
                          >
                            {item.day}
                          </span>
                          {isToday && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full inline-block mt-1">
                              {t.hours.today}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        {isClosed ? (
                          <span className="text-sm text-muted-foreground font-medium">
                            {t.hours.closed}
                          </span>
                        ) : (
                          <div className="text-sm text-foreground">
                            <div>{item.morning}</div>
                            <div className="text-muted-foreground text-xs">
                              {item.afternoon}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="bg-muted/50 px-6 py-4 border-t">
              <p className="text-center text-sm text-muted-foreground">
                {isOpen ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {t.hours.today}
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    {t.hours.closed}
                  </span>
                )}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
