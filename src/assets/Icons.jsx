export const icons = {
  BigLoading: (
    <svg
      width="60"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="pink"
    >
      <circle
        cx="50"
        cy="50"
        r="45" // Added radius to make the circle visible
        stroke="pink"
        strokeWidth="5"
        fill="none"
        strokeDasharray="282" // Corrected dasharray (close to 2 * π * 45)
        strokeDashoffset="75"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  ),
};
