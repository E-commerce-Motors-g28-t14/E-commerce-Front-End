import styled from "styled-components";

export const StyledButton = styled.button`
  width: 100%;
  height: 3.8rem;
  padding: 0 2rem;
  border-radius: var(--radius-2);

  @media (min-width: 700px) {
    height: 4.8rem;
    padding: 0 2.8rem;
  }

  &.grey1 {
    border: var(--border-size-2) solid var(--color-grey-0);
    color: var(--color-white-fixed);
    background-color: var(--color-grey-0);

    &:hover {
      border: var(--border-size-2) solid var(--color-grey-1);
      background-color: var(--color-grey-1);
    }
  }

  &.negative {
    border: var(--border-size-2) solid var(--color-grey-6);
    color: var(--color-grey-2);
    background-color: var(--color-grey-6);

    &:hover {
      border: var(--border-size-2) solid var(--color-grey-5);
      background-color: var(--color-grey-5);
    }
  }

  &.disable {
    cursor: default;
    border: var(--border-size-2) solid var(--color-grey-5);
    color: var(--color-white-fixed);
    background-color: var(--color-grey-5);
  }

  &.brand1 {
    border: var(--border-size-2) solid var(--color-brand-1);
    color: var(--color-white-fixed);
    background-color: var(--color-brand-1);

    &:hover {
      border: var(--border-size-2) solid var(--color-brand-2);
      background-color: var(--color-brand-2);
    }
  }

  &.brandOpacity {
    border: var(--border-size-2) solid var(--color-brand-4);
    color: var(--color-brand-1);
    background-color: var(--color-brand-4);
  }

  &.light {
    border: var(--border-size-2) solid var(--color-grey-10);
    color: var(--color-grey-1);
    background-color: var(--color-grey-10);
  }

  &.outlineLight {
    border: var(--border-size-2) solid var(--color-grey-10);
    color: var(--color-grey-10);
    background-color: var(--color-grey-10);

    &:hover {
      color: var(--color-grey-1);
    }
  }

  &.outline1 {
    border: var(--border-size-2) solid var(--color-grey-0);
    color: var(--color-grey-0);

    &:hover {
      border: var(--border-size-2) solid var(--color-grey-1);
      color: var(--color-grey-10);
      background-color: var(--color-grey-1);
    }
  }

  &.outline2 {
    border: var(--border-size-2) solid var(--color-grey-4);
    color: var(--color-grey-0);

    &:hover {
      border: var(--border-size-2) solid var(--color-grey-1);
      color: var(--color-grey-10);
      background-color: var(--color-grey-1);
    }
  }

  &.outlineBrand1 {
    border: var(--border-size-2) solid var(--color-brand-1);
    color: var(--color-brand-1);

    &:hover {
      background-color: var(--color-brand-4);
    }
  }

  &.link {
    border: var(--border-size-2) solid transparent;
    color: var(--color-grey-0);
    &:hover {
      background-color: var(--color-grey-8);
    }
  }

  &.alert {
    border: var(--border-size-2) solid var(--color-alert-3);
    color: var(--color-alert-1);
    background-color: var(--color-alert-3);

    &:hover {
      border: var(--border-size-2) solid var(--color-alert-2);
      background-color: var(--color-alert-2);
    }
  }

  &.sucess {
    border: var(--border-size-2) solid var(--color-sucess-3);
    color: var(--color-sucess-1);
    background-color: var(--color-sucess-3);

    &:hover {
      border: var(--border-size-2) solid var(--color-sucess-2);
      background-color: var(--color-sucess-2);
    }
  }

  &.brandDisable {
    cursor: default;
    border: var(--border-size-2) solid var(--color-brand-3);
    color: var(--color-brand-4);
    background-color: var(--color-brand-3);
  }
`;
