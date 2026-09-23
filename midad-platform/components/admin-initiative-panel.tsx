"use client";

import { useEffect, useMemo, useState } from "react";
import { initiatives as initialInitiatives, type Initiative } from "@/lib/site-data";

const emptyForm: Omit<Initiative, "id"> = {
  title: "",
  category: "تعليم",
  status: "قيد التنفيذ",
  date: new Date().toISOString().slice(0, 10),
  location: "الرياض",
  volunteers: 0,
  impact: "",
  description: "",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  gallery: [],
};

export function AdminInitiativePanel() {
  const [items, setItems] = useState<Initiative[]>(initialInitiatives);
  const [form, setForm] = useState<Omit<Initiative, "id">>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/admin/initiatives")
      .then(async (response) => {
        if (!response.ok) throw new Error("INITIATIVES_FETCH_FAILED");
        const result = (await response.json()) as { data: Initiative[] };
        setItems(result.data);
      })
      .catch(() => setMessage("تعذر تحميل المبادرات المحفوظة"))
      .finally(() => setIsLoading(false));
  }, []);

  const totalVolunteers = useMemo(
    () => items.reduce((sum, item) => sum + item.volunteers, 0),
    [items],
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: name === "volunteers" ? Number(value) : value,
    }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      setMessage("يرجى تعبئة عنوان المبادرة والوصف");
      return;
    }

    const isEditing = editingId !== null;
    const response = await fetch("/api/v1/admin/initiatives", {
      method: isEditing ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(isEditing ? { ...form, id: editingId } : form),
    });

    if (!response.ok) {
      setMessage("تعذر حفظ المبادرة");
      return;
    }

    const result = (await response.json()) as { data: Initiative; message: string };
    setItems((current) =>
      isEditing
        ? current.map((item) => (item.id === result.data.id ? result.data : item))
        : [result.data, ...current],
    );
    setMessage(result.message);
    resetForm();
  };

  const handleEdit = (item: Initiative) => {
    setEditingId(item.id);
    setForm({
      ...item,
      gallery: item.gallery ?? [],
    });
  };

  const handleDelete = async (id: number) => {
    const response = await fetch("/api/v1/admin/initiatives", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      setMessage("تعذر حذف المبادرة");
      return;
    }

    setItems((current) => current.filter((item) => item.id !== id));
    setMessage("تم حذف المبادرة وحفظ التغيير");
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <div className="mt-10 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">
            {editingId !== null ? "تعديل المبادرة" : "إضافة مبادرة جديدة"}
          </h2>
          {editingId !== null ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600"
            >
              إلغاء
            </button>
          ) : null}
        </div>
        {message ? <p className="mb-5 rounded-2xl bg-emerald-50 p-3 text-sm font-medium text-emerald-800">{message}</p> : null}

        <div className="space-y-5">
          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>عنوان المبادرة</span>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              placeholder="عنوان المبادرة"
            />
          </label>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2 text-sm font-medium text-slate-700">
              <span>الفئة</span>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              >
                <option>تعليم</option>
                <option>إنسانية</option>
                <option>ثقافة</option>
                <option>بيئة</option>
                <option>تنمية</option>
              </select>
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-700">
              <span>الحالة</span>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              >
                <option>قيد التنفيذ</option>
                <option>نشطة</option>
                <option>مجهز</option>
                <option>مستهدف</option>
              </select>
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2 text-sm font-medium text-slate-700">
              <span>الموقع</span>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-700">
              <span>عدد المتطوعين</span>
              <input
                name="volunteers"
                type="number"
                min={0}
                value={form.volunteers}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block space-y-2 text-sm font-medium text-slate-700">
              <span>تاريخ البداية</span>
              <input
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              />
            </label>

            <label className="block space-y-2 text-sm font-medium text-slate-700">
              <span>الأثر</span>
              <input
                name="impact"
                value={form.impact}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
                placeholder="مثال: 2,400 مستفيد"
              />
            </label>
          </div>

          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>رابط الصورة</span>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
            />
          </label>

          <label className="block space-y-2 text-sm font-medium text-slate-700">
            <span>وصف المبادرة</span>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-400"
              placeholder="اكتب وصفًا واضحًا عن المبادرة"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
          >
            {editingId !== null ? "حفظ التعديلات" : "إضافة المبادرة"}
          </button>
        </div>
      </form>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">قائمة المبادرات</h2>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
            {items.length} عنصر
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">إجمالي المتطوعين</p>
            <p className="mt-2 text-2xl font-black text-slate-900">{totalVolunteers}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">مبادرات فعالة</p>
            <p className="mt-2 text-2xl font-black text-slate-900">
              {items.filter((item) => item.status === "نشطة" || item.status === "قيد التنفيذ").length}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {isLoading ? <p className="text-sm text-slate-500">جارٍ تحميل المبادرات المحفوظة...</p> : null}
          {items.map((item) => (
            <div key={item.id} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-black text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.category} • {item.location}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">
                  {item.status}
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleEdit(item)}
                  className="rounded-full bg-slate-900 px-3 py-2 text-xs font-bold text-white"
                >
                  تعديل
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  className="rounded-full border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
