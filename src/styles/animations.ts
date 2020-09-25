export const animations = `
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
}

@keyframes fade-in-fade-out {
    0% {
        opacity: 0;
    }

    30% {
        opacity: 1;
    }

    45% {
        opacity: 1;
    }

    50% {
        opacity: 1;
    }

    90% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
}

@keyframes move-in-down {
    0% {
        opacity: 0;
        transform: translateY(-4rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes move-in-left {
    0% {
        opacity: 0;
        transform: translateX(4rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes move-in-right {
    0% {
        opacity: 0;
        transform: translateX(-2rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
`;
