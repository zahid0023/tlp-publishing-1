import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BookAppointmentButtonProps {
  className?: string;
  variant?: "coral" | "dark";
  label?: string;
}

const BookAppointmentButton = ({ className, variant = "coral", label = "Book An Appointment" }: BookAppointmentButtonProps) => {
  const styles =
    variant === "coral"
      ? { backgroundColor: "#F08A85", color: "#07142D" }
      : { backgroundColor: "#000000", color: "#ffffff" };

  return (
    <Button
      asChild
      className={cn(
        "group relative h-14 overflow-hidden rounded-full px-8 text-base font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:cursor-pointer border-0",
        className
      )}
      style={styles}
    >
      <a href="/booking">
        <span className="relative z-10 flex items-center gap-2">
          {label}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </a>
    </Button>
  );
};

export { BookAppointmentButton };
