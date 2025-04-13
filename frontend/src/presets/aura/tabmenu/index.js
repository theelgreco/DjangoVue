export default {
    root: {
        class: 'overflow-x-auto'
    },
    menu: {
        class: [
            // Flexbox
            'flex flex-1',

            // Spacing
            'list-none',
            'p-0 m-0',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'border-b-2 border-surface-200 dark:border-surface-700',
            'text-surface-900 dark:text-surface-0/80'
        ]
    },
    menuitem: {
        class: [
            'mr-0',
            'text-grays-light-400'
        ]
    },
    action: ({context, state}) => ({
        class: [
            'relative',

            // Font
            'font-semibold leading-none',

            // Flexbox and Alignment
            'flex items-center',

            // Spacing
            'py-4 px-[1.125rem]',
            '-mb-px',

            // Shape
            'border-b',
            'rounded-t-md',

            // Colors and Conditions
            {
                'text-black': state.d_activeIndex === context.index
            },

            // Transitions
            'transition-all duration-200',

            // Misc
            'cursor-pointer select-none text-decoration-none',
            'overflow-hidden',
            'user-select-none',
        ]
    }),
    inkbar: {
        class: 'bg-black'
    },
    nav: {
        class: 'border-grays-light-50'
    },
    icon: {
        class: 'mr-2'
    },
    label: ({context, state}) => ({
        class: [
            {
                '!text-grays-light-400 hover:!text-grays-light-500': state.d_activeIndex !== context.index,
                '!text-black': state.d_activeIndex === context.index
            }
        ]
    })
};
