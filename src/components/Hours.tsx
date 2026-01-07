import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Schedule from business data: Monday 09:00-13:00, Tuesday 13:00-17:00, Thursday 09:00-13:00
  const schedule = [
    { hours: "09:00 - 13:00" },  // Monday
    { hours: "13:00 - 17:00" },  // Tuesday
    { hours: t.hours.closed },   // Wednesday
    { hours: "09:00 - 13:00" },  // Thursday
    { hours: t.hours.closed },   // Friday
    { hours: t.hours.closed },   // Saturday
    { hours: t.hours.closed },   // Sunday
  ];

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  const isTodayOpen = schedule[todayIndex].hours !== t.hours.closed;

  return (
    <section id="horaires" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-md"
        >
          <div className="rounded-2xl border border-border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg font-bold text-foreground">{t.hours.header}</span>
            </div>
            <div className="divide-y divide-border">
              {schedule.map((item, i) => {
                const isToday = i === todayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <div
                    key={i}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                      <span className={`text-sm font-medium ${isToday ? "text-primary" : "text-foreground"}`}>
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span className={`text-sm font-medium ${isClosed ? "text-muted-foreground" : "text-foreground"}`}>
                      {item.hours}
                    </span>
                  </div>
                );
              })}
            </div>
            {isTodayOpen && (
              <div className="border-t border-border bg-accent/10 px-6 py-3">
                <p className="text-xs text-accent font-medium">✓ {t.hours.today} ouvert</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
