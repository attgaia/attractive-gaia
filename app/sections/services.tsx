'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services, ServiceItem } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section className="py-12">
      <div className="container grid md:grid-cols-2 gap-6">
        {services.map((service: ServiceItem) => {
          const isAI = service.title === "AIコンサルティング";

          return (
            <Card
              key={service.title}
              className={`p-6 shadow-sm hover:shadow-md transition-shadow rounded-xl ${
                isAI
                  ? "bg-gradient-to-r from-emerald-400 to-green-500 text-white"
                  : "bg-white"
              }`}
            >
              <div className="flex items-center mb-3">
                <service.icon className={`w-6 h-6 ${isAI ? "text-white" : "text-gray-600"}`} />
                <h3 className={`text-lg font-semibold ml-3 ${isAI ? "text-white" : ""}`}>
                  {service.title}
                </h3>
              </div>
              <p className={`text-sm mb-4 ${isAI ? "text-white/90" : "text-gray-600"}`}>
                {service.description}
              </p>
              <Button
                size="sm"
                variant={isAI ? "secondary" : "outline"}
                className={`w-full ${
                  isAI ? "bg-white/10 hover:bg-white/20 text-white border-white/20" : ""
                }`}
              >
                詳細を見る
              </Button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
