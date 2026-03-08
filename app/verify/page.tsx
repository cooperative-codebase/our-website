import { ContactFormReusable } from "@/components/ContactFormReusable"
import { useState } from "react"
import { Helmet } from "react-helmet-async"

export default function VerifyPage() {
  const [testLog, setTestLog] = useState<string[]>([])

  const logTest = (message: string) => {
    setTestLog(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`])
  }

  return (
    <>
      <Helmet>
        <title>Contact Form Test | Cooperative Codebase</title>
        <meta name="description" content="Test the contact form." />
        <meta property="og:title" content="Contact Form Test | Cooperative Codebase" />
        <meta property="og:description" content="Test the contact form." />
        <meta property="og:url" content="https://cooperativecodebase.com/verify" />
      </Helmet>
      <div className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Contact Form Test
        </h1>

        {/* Test Form */}
        <div className="bg-card border rounded-lg p-6 shadow-sm mb-8">
          <ContactFormReusable
            onSuccess={(data) => logTest(`✅ Form submitted successfully! Data: ${JSON.stringify(data)}`)}
            onError={(error) => logTest(`❌ Form error: ${error}`)}
          />
        </div>

        {/* Test Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">🧪 Test Instructions</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-blue-700">1. Test Phone Number Formatting:</h3>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• Try "(212) 555-2368" → Should auto-format to "+12125552368"</li>
                <li>• Try "2125552368" → Should auto-format to "+12125552368"</li>
                <li>• Try "+12125552368" → Should remain unchanged</li>
                <li>• Try "123" → Should show validation error</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700">2. Test Validation:</h3>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• Click "Send" with empty fields → Should show validation errors</li>
                <li>• Enter "test" in email → Should show "Please enter a valid email address"</li>
                <li>• Enter "Hi" in description → Should show "Description must be at least 10 characters"</li>
                <li>• Enter invalid phone → Should show phone format error</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700">3. Test Successful Submission:</h3>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• Email: "test@example.com"</li>
                <li>• Phone: "(212) 555-2368" (will auto-format)</li>
                <li>• Description: "This is a test message with more than 10 characters."</li>
                <li>• Click "Send" → Should show success message</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700">4. Check Browser Dev Tools:</h3>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• Open Developer Tools (F12)</li>
                <li>• Go to Console tab</li>
                <li>• Submit form → Should see format attempt logs</li>
                <li>• Go to Network tab → Should see POST request to API</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700">5. Internal Dual-Format Testing:</h3>
              <ul className="text-sm text-blue-600 space-y-1 ml-4">
                <li>• System automatically tries JSON first</li>
                <li>• If JSON fails, automatically tries form-encoded</li>
                <li>• User only sees final result (success or error)</li>
                <li>• Check console for format attempt logs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Test Results */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-800">📊 Test Results</h2>
          <div className="bg-white p-4 rounded border max-h-48 overflow-y-auto">
            {testLog.length === 0 ? (
              <p className="text-gray-500">No test results yet. Submit the form above to see results here.</p>
            ) : (
              <ul className="space-y-1">
                {testLog.map((log, index) => (
                  <li key={index} className="text-sm font-mono text-green-700">{log}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Success Indicators */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">✅ Success Indicators:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Phone numbers auto-format to international format</li>
            <li>• Form shows validation errors for invalid input</li>
            <li>• Button shows "Sending..." during submission (both attempts)</li>
            <li>• Success message appears after valid submission</li>
            <li>• Form resets to empty after success</li>
            <li>• Test log shows successful submission with data</li>
            <li>• Console shows format attempt logs</li>
            <li>• Network tab shows POST request to the correct endpoint</li>
          </ul>
        </div>

        {/* New Features */}
        <div className="mt-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">🆕 New Internal Features:</h3>
          <ul className="text-sm text-purple-700 space-y-1">
            <li>• <strong>Smart Phone Formatting:</strong> Auto-converts to international format</li>
            <li>• <strong>Internal Dual Format:</strong> Automatically tries JSON then form-encoded</li>
            <li>• <strong>Seamless UX:</strong> User only sees final result</li>
            <li>• <strong>Enhanced Validation:</strong> Phone number format validation</li>
            <li>• <strong>Better Error Handling:</strong> Detailed error messages</li>
            <li>• <strong>Console Logging:</strong> Format attempts logged for debugging</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
} 