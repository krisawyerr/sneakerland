"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { SIZE_VALUE_0, SIZE_VALUE_1, SIZE_VALUE_2, SIZE_VALUE_3, SIZE_VALUE_4, SIZE_VALUE_5, SIZE_VALUE_6 } from "../config/custom setting/sizes"; // Adjust the import path as needed
import { CAT_VALUE_0, CAT_VALUE_1, CAT_VALUE_2 } from "../config/custom setting/category"; // Adjust the import path as needed
import { COLOR_VALUE_0, COLOR_VALUE_1, COLOR_VALUE_2, COLOR_VALUE_3 } from "../config/custom setting/color"; // Adjust the import path as needed


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { use } from "react"

const filters = [
  {
    id: "category",
    name: "Brand",
    options: [
      { value: CAT_VALUE_0, label: CAT_VALUE_0 },
      { value: CAT_VALUE_1, label: CAT_VALUE_1 },
      { value: CAT_VALUE_2, label: CAT_VALUE_2 },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: SIZE_VALUE_0, label: SIZE_VALUE_0 },
      { value: SIZE_VALUE_1, label: SIZE_VALUE_1 },
      { value: SIZE_VALUE_2, label: SIZE_VALUE_2 },
      { value: SIZE_VALUE_3, label: SIZE_VALUE_3 },
      { value: SIZE_VALUE_4, label: SIZE_VALUE_4 },
      { value: SIZE_VALUE_5, label: SIZE_VALUE_5 },
      { value: SIZE_VALUE_6, label: SIZE_VALUE_6 },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: COLOR_VALUE_0, label: COLOR_VALUE_0 },
      { value: COLOR_VALUE_1, label: COLOR_VALUE_1 },
      { value: COLOR_VALUE_2, label: COLOR_VALUE_2 },
      { value: COLOR_VALUE_3, label: COLOR_VALUE_3 },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                  {searchParams.get(section.id) ? `(${searchParams.get(section.id)})` : ''}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={`filter-${section.id}-${optionIdx}`} checked={searchValues.some(([key, value]) => key === section.id && value === option.value)} onClick={(event) => {
                      const params = new URLSearchParams(searchParams)
                      const checked = event.currentTarget.dataset.state === "checked"
                      checked ? params.delete(section.id) : params.set(section.id, option.value)
                      router.replace(`/?${params.toString()}`)
                    }} />
                    <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
