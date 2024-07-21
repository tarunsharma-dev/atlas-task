import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import Button from "../button/Button";
import PropTypes from "prop-types";
import { CloseIcon } from "../../../icons_images/CustomImgIcon";

export default function Modal({
	closeIcon = true,
	closeBtnPos,
	close,
	children,
	isOpen,
	setIsOpen,
	maskClosable = true,
}) {
	const handleOutsideClick = (event) => {
		if (event.target === event.currentTarget) {
			// Click occurred outside the modal, prevent closing
			return;
		}
		// Otherwise, let the default behavior of closing the modal proceed
		setIsOpen(false);
	};
	return (
		<>
			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={(e) =>
					maskClosable ? handleOutsideClick(e) : setIsOpen(false)
				}
				// onClose={close}
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-color-base-1/5 backdrop-blur-[2px] duration-300 ease-out data-[closed]:opacity-0"
				/>
				<div className="fixed inset-0 flex w-screen items-center justify-center p-4">
					<TransitionChild
						unmount={true}
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						<DialogPanel
							transition
							className="relative w-full max-w-md rounded-xl bg-color-base-2 border-[2px] border-level-2 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
							{closeIcon ? (
								<div
									className={`${
										closeBtnPos ? closeBtnPos : "top-3 right-3"
									} absolute z-10`}>
									<Button
										type="button"
										onClick={() => {
											close;
											setIsOpen(false);
										}}
										// disabled={disableHeaderClose}
										className={`bg-color-base-1 hover:bg-color-base-3 hover:shadow-md hover:shadow-level-2 duration-200 w-[28px] h-[28px] flex gap-2 relative p-0 text-sm rounded-full text-white`}>
										<CloseIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover h-4 w-4" />
									</Button>
								</div>
							) : null}
							{children}
							{/* <DialogTitle
								as="h3"
								className="text-base/7 font-medium text-white">
								Payment successful
							</DialogTitle>
							<p className="mt-2 text-sm/6 text-white/50">
								Your payment has been successfully submitted. We’ve sent you an
								email with all of the details of your order.
							</p>
							<div className="mt-4">
								<Button
									className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
									onClick={closeFunc}>
									Got it, thanks!
								</Button>
							</div> */}
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</>
	);
}
Modal.propTypes = {
	closeIcon: PropTypes.bool,
	closeBtnPos: PropTypes.string,
	close: PropTypes.any,
	children: PropTypes.any,
	isOpen: PropTypes.any,
	setIsOpen: PropTypes.any,
	maskClosable: PropTypes.any,
};