import React from "react";

export default function FilterSearch() {
  return (
    <aside className="border h-fit rounded w-full max-w-[200px] p-4">
      <div className="mb-5">
        <h2 className="text-3xl font-semibold mb-2">Sort by</h2>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="radio"
            name="sort"
            id="baru"
            value="baru"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="baru">Baru Rilis</label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="radio"
            name="sort"
            id="diskon"
            value="diskon"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="diskon">Diskon</label>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-2">Kategori</h2>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="kotlin"
            value="kotlin"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="kotlin">Kotlin</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="flutter"
            value="flutter"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="flutter">Flutter</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="swift"
            value="swift"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="swift">Swift</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="laravel"
            value="laravel"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="laravel">Laravel</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="php"
            value="php"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="php">PHP</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="data_science"
            value="data_science"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="data_science">Data Science</label>
        </div>
        <div className="flex gap-2 items-center mb-2">
          <input
            type="checkbox"
            name="category"
            id="ui_design"
            value="ui_design"
            className="accent-[#219653] w-5 h-5"
          />
          <label htmlFor="ui_design">UI Design</label>
        </div>
      </div>
    </aside>
  );
}
