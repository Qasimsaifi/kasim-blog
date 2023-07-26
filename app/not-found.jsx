import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-screen justify-center">
    <center className="pt-32 m-auto">
    <svg
          className="emoji-404"
          height="249.135"
          viewBox="0 0 226 249.135"
          width="226"
          xmlSpace="preserve"
        >
          <circle cx="113" cy="113" fill="#9F7AEA" r="109" />
          <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
          <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
          <ellipse
            cx="67.732"
            cy="140.894"
            fill="#FF0000"
            opacity="0.18"
            rx="17.372"
            ry="8.106"
          />
          <ellipse
            cx="154.88"
            cy="140.894"
            fill="#FF0000"
            opacity="0.18"
            rx="17.371"
            ry="8.106"
          />
          <path
            d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
            fill="#FFEFB5"
          />
          <circle cx="113" cy="113" fill="none" r="109" stroke="#6E6E96" strokeWidth="8" />
        </svg>
      <div className="tracking-widest mt-4">
        <span className="text-gray-500 text-6xl block">
          <span>4 0 4</span>
        </span>
        <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>
      </div>
    </center>
    <center className="mt-6">
      <Link href="/" className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">
        Go back
      </Link>
    </center>
  </div>
  )
}