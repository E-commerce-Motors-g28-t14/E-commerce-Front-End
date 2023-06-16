import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
:root {
    --color-alert-1: #cd2b31;
	--color-alert-2: #fdd8d8;
	--color-alert-3: #ffe5e5;
	--color-success-1: #18794e;
	--color-success-2: #ccebd7;
	--color-success-3: #ddf3e4;
	--color-random-1: #e34d8c;
	--color-random-2: #c04277;
	--color-random-3: #7d2a4d;
	--color-random-4: #7000ff;
	--color-random-5: #6200e3;
	--color-random-6: #36007d;
	--color-random-7: #349974;
	--color-random-8: #2a7d5f;
	--color-random-9: #153d2e;
	--color-random-10: #6100ff;
	--color-random-11: #5700e3;
	--color-random-12: #30007d;
	--color-brand-1: #4529e6;
	--color-brand-2: #5126ea;
	--color-brand-3: #b0a6f0;
	--color-brand-4: #edeafd;
	--color-grey-0: #0b0d0d;
	--color-grey-1: #212529;
	--color-grey-2: #495057;
	--color-grey-3: #868e96;
	--color-grey-4: #adb5bd;
	--color-grey-5: #ced4da;
	--color-grey-6: #dee2e6;
	--color-grey-7: #e9ecef;
	--color-grey-8: #f1f3f5;
	--color-grey-9: #f8f9fa;
	--color-grey-10: #fdfdfd;
	--color-white-fixed: #ffffff;

    font-size: 60%; 

	--font-size-1: 4.4rem;
	--font-size-2: 3.6rem;
	--font-size-3: 3.2rem;
	--font-size-4: 2.8rem;
	--font-size-5: 2.4rem;
	--font-size-6: 2.0rem;
	--font-size-7: 1.6rem;
	--font-size-8: 1.4rem;
	--font-size-9: 1.2rem;

	--border-size-1: 0.2rem;
	--border-size-2: 0.15rem;
	--border-size-3: 0.1rem;

	--radius-1: 0.8rem;
	--radius-1: 0.4rem;
	--radius-2: 0.2rem;
}

@media (min-width: 700px) {
    :root {
      font-size: 62.5%; // root font-size: 10px;
    }
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

a{
	text-decoration: none;
	&:hover {
      color: var(--color-grey-10);}
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
}

.container {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.6rem;
}
`;
