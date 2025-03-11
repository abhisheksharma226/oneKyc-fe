import React, { useState, useRef, useCallback } from "react";
import { Loader2, Send } from "lucide-react";

const OtpVerification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const otpInputs = useRef<HTMLInputElement[]>([]);

  const handleSendOtp = () => {
    if (!phoneNumber) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      otpInputs.current[0]?.focus();
    }, 1500);
  };

  const handleVerifyOtp = () => {
    if (otp.some((digit) => digit === "")) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsVerified(true);
    }, 1500);
  };

  const handleOtpChange = useCallback(
    (index: number, value: string) => {
      if (!/^[0-9]*$/.test(value)) return;

      const newOtp = [...otp];
      newOtp[index] = value.slice(0, 1);
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        otpInputs.current[index + 1]?.focus();
      }
    },
    [otp]
  );

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  if (isVerified) {
    return (
      <div className="flex flex-col items-center justify-center py-4">
        <h3 className="mt-4 text-lg font-medium">Phone Verified Successfully</h3>
        <p className="mt-2 text-center text-muted-foreground">
          Your phone number has been verified. You can now proceed with the next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 border p-6 rounded-lg shadow-md">
      {!otpSent ? (
        <div className="space-y-4">
          <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
          <div className="flex items-center gap-2">
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-12 w-full rounded-lg border px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              onClick={handleSendOtp}
              disabled={!phoneNumber || isLoading}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send OTP
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            We'll send a one-time password to verify your phone number
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <label className="block text-sm font-medium">Enter OTP sent to {phoneNumber}</label>
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (otpInputs.current[index] = el as HTMLInputElement)}
                type="text"
                inputMode="numeric"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                className="h-14 w-14 text-center text-xl rounded-lg border shadow-sm focus:ring-2 focus:ring-gray-500"
              />
            ))}
          </div>
          <button
            onClick={handleVerifyOtp}
            disabled={otp.some((digit) => digit === "") || isLoading}
            className="text-gray-700 hover:text-black transition w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
          <div className="flex items-center justify-between text-gray-700">
            <button onClick={() => setOtpSent(false)} className="text-sm hover:text-black">Change Phone Number</button>
            <button onClick={handleSendOtp} className="text-sm hover:text-black">Resend OTP</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(OtpVerification);
