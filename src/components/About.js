import React from 'react'

export default function About() {
  return (
    <div>
      <p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
      <p class="user-select-auto">This paragraph has default select behavior.</p>
      <p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>

    </div>
  )
}
