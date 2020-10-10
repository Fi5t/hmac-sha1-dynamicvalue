import hmacSha1 from 'crypto-js/hmac-sha1'
import Base64 from 'crypto-js/enc-base64';

@registerDynamicValueClass
class HmacSha1DynamicValue {
    static identifier = 'xyz.fi5t.PawExtensions.HmacSha1DynamicValue'
    static title = 'HMAC-SHA1'
    static help = 'https://google.com'
    static inputs = [
        DynamicValueInput('input', 'Input text', "String"),
        DynamicValueInput('key', 'Key', "String"),
    ]

    evaluate(context) {
        return Base64.stringify(hmacSha1(this.input, this.key));
    }
}