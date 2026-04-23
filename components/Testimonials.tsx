"use client";
import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
};

export default function Testimonials() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">Testimonials</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10 px-6">
        {data.slice(0, 3).map((item) => (
          <div key={item.id} className="shadow p-4 rounded">
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}