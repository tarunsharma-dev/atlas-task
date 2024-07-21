import classNames from "classnames";
import PropTypes from "prop-types";

export function Logo({ size = "1em", className }) {
	return (
		<svg
			width={size}
			height={size}
			className={classNames(className)}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.53118 10.6665C5.53118 7.83026 7.83042 5.53102 10.6667 5.53102C13.5029 5.53102 15.8022 7.83026 15.8022 10.6665C15.8022 13.5028 13.5029 15.802 10.6667 15.802C7.83042 15.802 5.53118 13.5028 5.53118 10.6665ZM10.6667 3.53102C6.72585 3.53102 3.53118 6.72569 3.53118 10.6665C3.53118 14.6073 6.72585 17.802 10.6667 17.802C14.6075 17.802 17.8022 14.6073 17.8022 10.6665C17.8022 6.72569 14.6075 3.53102 10.6667 3.53102ZM15.934 29.3336L6.46659 34.5709V24.0963L15.934 29.3336ZM6.32166 21.7305C5.48854 21.2696 4.46659 21.8722 4.46659 22.8243L4.46659 35.8429C4.46659 36.795 5.48854 37.3976 6.32166 36.9367L18.0885 30.4274C18.9484 29.9517 18.9484 28.7155 18.0885 28.2398L6.32166 21.7305ZM22.3333 23.5834C22.3333 22.893 22.893 22.3334 23.5833 22.3334H35.0833C35.7737 22.3334 36.3333 22.893 36.3333 23.5834V35.0834C36.3333 35.7737 35.7737 36.3334 35.0833 36.3334H23.5833C22.893 36.3334 22.3333 35.7737 22.3333 35.0834V23.5834ZM24.3333 24.3334V34.3334H34.3333V24.3334H24.3333ZM35.7071 5.70684C36.0976 5.31631 36.0976 4.68315 35.7071 4.29263C35.3166 3.9021 34.6834 3.9021 34.2929 4.29263L29.3333 9.25222L24.3738 4.29269C23.9832 3.90217 23.3501 3.90217 22.9596 4.29269C22.569 4.68322 22.569 5.31638 22.9596 5.70691L27.9191 10.6664L22.9596 15.626C22.569 16.0165 22.569 16.6496 22.9596 17.0402C23.3501 17.4307 23.9832 17.4307 24.3738 17.0402L29.3333 12.0806L34.2929 17.0402C34.6834 17.4308 35.3166 17.4308 35.7071 17.0402C36.0976 16.6497 36.0976 16.0166 35.7071 15.626L30.7475 10.6664L35.7071 5.70684Z"
				// fill="#C5C7CA"
				fill="currentColor"
			/>
		</svg>
	);
}

Logo.propTypes = { size: PropTypes.number, className: PropTypes.string };

export function EyeIcon({ size = "1em", className }) {
	return (
		<svg
			width={size}
			height={size}
			className={classNames(className)}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.41667 10C2.41667 9.19329 2.93513 7.70472 4.18608 6.40565C5.40721 5.13755 7.29888 4.08334 10 4.08334C12.7011 4.08334 14.5928 5.13755 15.8139 6.40565C17.0649 7.70472 17.5833 9.19329 17.5833 10C17.5833 10.8067 17.0649 12.2953 15.8139 13.5944C14.5928 14.8624 12.7011 15.9167 10 15.9167C7.29888 15.9167 5.40721 14.8624 4.18608 13.5944C2.93513 12.2953 2.41667 10.8067 2.41667 10ZM10 2.58334C6.8678 2.58334 4.5928 3.82078 3.1056 5.36519C1.64822 6.87862 0.916672 8.72338 0.916672 10C0.916672 11.2766 1.64822 13.1214 3.1056 14.6348C4.5928 16.1792 6.8678 17.4167 10 17.4167C13.1322 17.4167 15.4072 16.1792 16.8944 14.6348C18.3518 13.1214 19.0833 11.2766 19.0833 10C19.0833 8.72338 18.3518 6.87862 16.8944 5.36519C15.4072 3.82078 13.1322 2.58334 10 2.58334ZM8.24993 10C8.24993 9.0335 9.03343 8.25 9.99993 8.25C10.9664 8.25 11.7499 9.0335 11.7499 10C11.7499 10.9665 10.9664 11.75 9.99993 11.75C9.03343 11.75 8.24993 10.9665 8.24993 10ZM9.99993 6.75C8.205 6.75 6.74993 8.20508 6.74993 10C6.74993 11.7949 8.205 13.25 9.99993 13.25C11.7949 13.25 13.2499 11.7949 13.2499 10C13.2499 8.20508 11.7949 6.75 9.99993 6.75Z"
				fill="currentColor"
			/>
		</svg>
	);
}

EyeIcon.propTypes = { size: PropTypes.number, className: PropTypes.string };

export function DotHorizontal({ size = "1em", className }) {
	return (
		<svg
			width={size}
			height={size}
			className={classNames(className)}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.83337 10C4.83337 10.8284 4.1618 11.5 3.33337 11.5C2.50495 11.5 1.83337 10.8284 1.83337 10C1.83337 9.17157 2.50495 8.5 3.33337 8.5C4.1618 8.5 4.83337 9.17157 4.83337 10ZM11.5 10C11.5 10.8284 10.8285 11.5 10 11.5C9.17161 11.5 8.50004 10.8284 8.50004 10C8.50004 9.17157 9.17161 8.5 10 8.5C10.8285 8.5 11.5 9.17157 11.5 10ZM16.6667 11.5C17.4951 11.5 18.1667 10.8284 18.1667 10C18.1667 9.17157 17.4951 8.5 16.6667 8.5C15.8383 8.5 15.1667 9.17157 15.1667 10C15.1667 10.8284 15.8383 11.5 16.6667 11.5Z"
				fill="#C5C7CA"
			/>
		</svg>
	);
}

DotHorizontal.propTypes = {
	size: PropTypes.number,
	className: PropTypes.string,
};
export function ChatBubble({ size = "1em", className }) {
	return (
		<svg
			width={size}
			height={size}
			className={classNames(className)}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17.3333 3.83333L2.66662 3.83336C1.8382 3.83336 1.16663 4.50493 1.16663 5.33336V13.3334C1.16663 14.1618 1.8382 14.8334 2.66662 14.8334H10C10.1326 14.8334 10.2598 14.886 10.3536 14.9798L13.5 18.1262V15.3334C13.5 15.0572 13.7238 14.8334 14 14.8334H17.3333C18.1617 14.8334 18.8333 14.1618 18.8333 13.3334V5.33333C18.8333 4.5049 18.1617 3.83333 17.3333 3.83333ZM2.66662 2.83336L17.3333 2.83333C18.714 2.83333 19.8333 3.95262 19.8333 5.33333V13.3334C19.8333 14.7141 18.714 15.8334 17.3333 15.8334H14.5V19.3333C14.5 19.5356 14.3781 19.7179 14.1913 19.7953C14.0045 19.8727 13.7894 19.8299 13.6464 19.6869L9.79289 15.8334H2.66662C1.28591 15.8334 0.166626 14.7141 0.166626 13.3334V5.33336C0.166626 3.95265 1.28591 2.83336 2.66662 2.83336Z"
				fill="#C5C7CA"
			/>
		</svg>
	);
}

ChatBubble.propTypes = {
	size: PropTypes.number,
	className: PropTypes.string,
};
export function CloseIcon({ size = "1em", className }) {
	return (
		<svg
			width={size}
			height={size}
			className={classNames(className)}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.5754 4.30861C12.8194 4.06454 12.8194 3.66881 12.5754 3.42473C12.3313 3.18065 11.9355 3.18065 11.6915 3.42473L8.00008 7.11612L4.30869 3.42473C4.06461 3.18065 3.66888 3.18065 3.42481 3.42473C3.18073 3.66881 3.18073 4.06454 3.42481 4.30861L7.1162 8L3.42481 11.6914C3.18073 11.9355 3.18073 12.3312 3.42481 12.5753C3.66888 12.8194 4.06461 12.8194 4.30869 12.5753L8.00008 8.88389L11.6915 12.5753C11.9355 12.8194 12.3313 12.8194 12.5754 12.5753C12.8194 12.3312 12.8194 11.9355 12.5754 11.6914L8.88396 8L12.5754 4.30861Z"
				fill="currentColor"
			/>
		</svg>
	);
}

CloseIcon.propTypes = {
	size: PropTypes.number,
	className: PropTypes.string,
};
