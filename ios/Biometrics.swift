import Foundation
import LocalAuthentication

@objcMembers class MyBiometric: NSObject {

  func getAvailableBiometric() -> String {
    return getBiometrics()
  }

  private func getBiometrics() -> String {
    let authContext = LAContext()
    _ = authContext.canEvaluatePolicy(.deviceOwnerAuthenticationWithBiometrics, error: nil)
    switch authContext.biometryType {
    case .none:
      return "NoBiometricFound"
    case .touchID:
      return "FINGERPRINT"
    case .faceID:
      return "FACE"
    @unknown default:
      return "UnKnown Error"
    }
  }

  typealias CompletionHandler = (_ success:Bool) -> NSString

}
