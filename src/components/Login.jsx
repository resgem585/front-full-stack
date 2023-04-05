import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../graphql/Queries";
import { userState } from "../config/userState";
import "../styles/login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState("");
  const setUserSession = userState((state) => state.addSession);
  const verifySession = userState((state) => state.session);
  console.log("get current session in login", verifySession);

  const [login, { data, error }] = useLazyQuery(LOGIN, {
    variables: { email, password },
  });
  return (
    <>
    <div className="inicio">
      <div dir="auto" class="css-1rynq56" data-testid="SignInTitle">Iniciar sesión</div>
      </div>
      <form
        className="form1"
        onSubmit={async (e) => {
          e.preventDefault();
          await login().then(function (response) {
            var data = response.data.login;
            if (data) {
              navigate("/home");
              setUserSession({ isValid: true });
            } else {
              setIsInvalid("Invalid login!! Try again ");
            }
          });
        }}
      >
        <div className="css-175oi2r">
          <div className="css-175oi2r r-1oszu61 r-eqz5dr r-1h0z5m">
            <div dir="auto" className="css-1rynq57">
              ¿Tienes una cuenta de HBO Max?
            </div>
            <div className="css-175oi2r r-1ifxtd0">
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                autoCapitalize="none"
                autoCorrect="off"
                placeholder="Dirección de e-mail"
                autoComplete="on"
                dir="auto"
                enterKeyHint="next"
                spellCheck="false"
                type="email"
                aria-live="assertive"
              />
              <div
                className="css-175oi2r r-18u37iz r-14gqq1x"
                id="EmailTextInputError"
              >
                <div
                  aria-label="Error:"
                  className="css-175oi2r r-1mlwlqe r-1udh08x r-417010"
                >
                  <div className="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv" />
                  <img
                    alt="Error:"
                    draggable="false"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAAD/TEz/S0v/TU3/TEz/UFD/UFD/TEz/TEz/TEz/Skr/S0v/QED/TU3/TU3/TU3/TEyEKNmKAAAAEXRSTlMAQHCfgCAQr++QYN8QoGCPf624WOIAAABoSURBVHgBBcGBAYMgDACwCC1SGOr/1y4BAABcrfdIAOOetVbtnkDuGiD2D5zA86BuyA0RGPNCFERANZwHImB1nAciYHW0AgMqcM0fMmEn3C9O4Otg7A+MdyeQZ9daNe8BIKP3dgEAAH9qmQK2hALIPwAAAABJRU5ErkJggg=="
                    className="css-9pa8cd"
                  />
                </div>
                <div dir="auto" className="css-1rynq56">
                  Debes ingresar una dirección de e-mail.
                </div>
              </div>
            </div>
            <div className="css-175oi2r r-1ifxtd0">
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                autoCapitalize="none"
                autoCorrect="off"
                maxLength="{65}"
                placeholder="Contraseña"
                autoComplete="on"
                dir="auto"
                enterKeyHint="done"
                spellCheck="false"
                type="password"
                aria-live="assertive"
                className="css-11aywtz r-6taxm2"
                id="PasswordTextInput"
                data-testid="PasswordTextInput"
              />
              <div
                role="button"
                tabIndex={0}
                className="css-175oi2r r-1loqt21 r-1otgn73 r-173mn98 r-1niwhzg r-1mwlp6a r-1777fci r-u8s1d r-usgzl9"
              >
                <div
                  aria-label="Contraseña oculta. Selecciona para mostrar la contraseña"
                  className="css-175oi2r r-1mlwlqe r-1udh08x r-417010"
                >
                  <div
                    className="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv"
                    style={{ backgroundImage: 'url("data:image/png' }}
                  />
                  <img
                    alt="Contraseña oculta. Selecciona para mostrar la contraseña"
                    draggable="false"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAAr0lEQVR42tXRQRHDIBCF4SchEiIhEiKhDoIEHICESKiTSqAONg5Wwt9DgKaZTs7tHpmP3bcg/WExEwjMV2Qg4cDGBhiJ8RubMIzIUC8FDGM6swVnZZCIGIUkSazAcmQ3IEsSCScScaIkkQ+UEd+ZRKkgYvUk43scMeMtC1uHpWenvwFro/tQYpvB9J6mnqWleh768sF6LyP0Nw082kpnOnLHAcMAJ9clrr/wEv1ovQBv0LECTGXobgAAAABJRU5ErkJggg=="
                    className="css-9pa8cd"
                  />
                </div>
              </div>
            </div>
            <div className="css-175oi2r r-1awozwy r-18u37iz r-1w6e6rj r-1h0z5md r-1x0uki6">
              <div
                aria-disabled="true"
                aria-label="Iniciar sesión"
                role="button"
                tabIndex={-1}
                className="css-175oi2r r-3691iy r-633pao"
                data-testid="SignInButton"
              >
                <div className="css-175oi2r r-1awozwy r-58xgd4 r-42olwf r-z2wwpe r-d045u9 r-18u37iz r-1777fci r-peo1c r-xb9fkz r-kzbkwu r-d9fdf6 r-1b3ntt7">
                  <button type="submit" dir="auto" aria-hidden="true">
                    Iniciar sesión
                  </button>
                </div>
              </div>
              <div
                aria-label="¿Olvidaste la contraseña?"
                role="link"
                tabIndex={0}
                className="css-175oi2r r-1loqt21 r-1otgn73"
              >
                <div
                  dir="auto"
                  className="css-1rynq56 r-7e3msg"
                  data-testid="ForgotPasswordLink"
                >
                  ¿Olvidaste la contraseña?
                </div>
              </div>
            </div>
          </div>
          <div className="css-175oi2r r-1awozwy r-18u37iz r-1777fci r-764hgp">
            <div className="css-175oi2r r-109y4c4 r-16y2uox r-9tfo2e" />
            <div dir="auto" className="css-1rynq56 r-1n9sb9w">
              O
            </div>
            <div className="css-175oi2r r-109y4c4 r-16y2uox r-9tfo2e" />
          </div>
          <div className="css-175oi2r r-1habvwh r-eqz5dr r-1h0z5md">
            <div
              dir="auto"
              className="css-1rynq56 r-117bsoe"
              data-testid="SignInProviderLoginSectionTitle"
            >
              ¿Tienes HBO Max a través de otra empresa, como un proveedor de TV,
              de telefonía móvil o Internet?
            </div>
            <div
              aria-label="Iniciar sesión con un proveedor"
              role="button"
              tabIndex={0}
              className="css-175oi2r r-1loqt21 r-1otgn73"
              data-testid="ProviderButton"
            >
              <div className="css-175oi2r r-1awozwy r-14t88dt r-42olwf r-z2wwpe r-d045u9 r-18u37iz r-1777fci r-peo1c r-xb9fkz r-kzbkwu r-d9fdf6 r-1b3ntt7">
                <div
                  dir="auto"
                  aria-hidden="true"
                  className="css-1rynq56 r-q4m81j r-184en5c"
                >
                  Iniciar sesión con un proveedor
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

{
  /*   <div className="css-175oi2r" >
    <div className="css-175oi2r r-1oszu61 r-eqz5dr r-1h0z5md">
        <div dir="auto" className="css-1rynq56 r-117bsoe" style={{color: 'rgb(255, 255, 255)', fontFamily: 'StreetLCG2', fontWeight: 400, fontStyle: 'normal', fontSize: 14, letterSpacing: 0, lineHeight: 21}}>¿Tienes una cuenta de HBO Max?</div>
        <div className="css-175oi2r r-1ifxtd0">
            <input autoCapitalize="none" autoCorrect="off" placeholder="Dirección de e-mail" autoComplete="on" dir="auto" enterKeyHint="next" spellCheck="false" type="email" aria-live="assertive" className="css-11aywtz r-6taxm2 r-1h37y09" id="EmailTextInput" data-testid="EmailTextInput" style={{-placeholdertextcolor: 'rgba(255,255,255,0.7)', alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 4, borderWidth: '0.5px', color: 'rgb(255, 255, 255)', height: 56, paddingLeft: 12, width: '100%', fontFamily: 'StreetLCG2', fontWeight: 400, fontStyle: 'normal', fontSize: 16, letterSpacing: 0}} />
        <div className="css-175oi2r r-18u37iz r-14gqq1x" id="EmailTextInputError">
            <div aria-label="Error:" className="css-175oi2r r-1mlwlqe r-1udh08x r-417010" style={{height: 16, marginRight: 4, marginTop: 1, width: 16}}>
                <div className="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv" style={{backgroundImage: 'url("data:image/png'}} />
                <img alt="Error:" draggable="false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAAD/TEz/S0v/TU3/TEz/UFD/UFD/TEz/TEz/TEz/Skr/S0v/QED/TU3/TU3/TU3/TEyEKNmKAAAAEXRSTlMAQHCfgCAQr++QYN8QoGCPf624WOIAAABoSURBVHgBBcGBAYMgDACwCC1SGOr/1y4BAABcrfdIAOOetVbtnkDuGiD2D5zA86BuyA0RGPNCFERANZwHImB1nAciYHW0AgMqcM0fMmEn3C9O4Otg7A+MdyeQZ9daNe8BIKP3dgEAAH9qmQK2hALIPwAAAABJRU5ErkJggg==" className="css-9pa8cd" />
                </div>
                <div dir="auto" className="css-1rynq56" style={{color: 'rgb(255, 76, 76)', fontFamily: 'StreetLCG2', fontWeight: 600, fontStyle: 'normal', fontSize: 12, letterSpacing: 0, lineHeight: 18}}>Debes ingresar una dirección de e-mail.</div></div></div><div className="css-175oi2r r-1ifxtd0">
                    <input autoCapitalize="none" autoCorrect="off" maxLength={65} placeholder="Contraseña" autoComplete="on" dir="auto" enterKeyHint="done" spellCheck="false" type="password" aria-live="assertive" className="css-11aywtz r-6taxm2" id="PasswordTextInput" data-testid="PasswordTextInput" style={{-placeholdertextcolor: 'rgba(255,255,255,0.7)', alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 4, borderWidth: '0.5px', color: 'rgb(255, 255, 255)', height: 56, paddingLeft: 12, width: '100%', paddingRight: 44, fontFamily: 'StreetLCG2', fontWeight: 400, fontStyle: 'normal', fontSize: 16, letterSpacing: 0}} />
                    <div role="button" tabIndex={0} className="css-175oi2r r-1loqt21 r-1otgn73 r-173mn98 r-1niwhzg r-1mwlp6a r-1777fci r-u8s1d r-usgzl9"><div aria-label="Contraseña oculta. Selecciona para mostrar la contraseña" className="css-175oi2r r-1mlwlqe r-1udh08x r-417010" style={{alignSelf: 'center', backgroundColor: 'rgba(0, 0, 0, 0)', height: 20, width: 20}}><div className="css-175oi2r r-1niwhzg r-vvn4in r-u6sd8q r-1p0dtai r-1pi2tsx r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-13qz1uu r-1wyyakw r-4gszlv" style={{backgroundImage: 'url("data:image/png'}} />
                    <img alt="Contraseña oculta. Selecciona para mostrar la contraseña" draggable="false" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAAr0lEQVR42tXRQRHDIBCF4SchEiIhEiKhDoIEHICESKiTSqAONg5Wwt9DgKaZTs7tHpmP3bcg/WExEwjMV2Qg4cDGBhiJ8RubMIzIUC8FDGM6swVnZZCIGIUkSazAcmQ3IEsSCScScaIkkQ+UEd+ZRKkgYvUk43scMeMtC1uHpWenvwFro/tQYpvB9J6mnqWleh768sF6LyP0Nw082kpnOnLHAcMAJ9clrr/wEv1ovQBv0LECTGXobgAAAABJRU5ErkJggg==" className="css-9pa8cd" />
                    </div>
                    </div>
                    </div>
                    <div className="css-175oi2r r-1awozwy r-18u37iz r-1w6e6rj r-1h0z5md r-1x0uki6">
                        <div aria-disabled="true" aria-label="Iniciar sesión" role="button" tabIndex={-1} className="css-175oi2r r-3691iy r-633pao" data-testid="SignInButton">
                            <div className="css-175oi2r r-1awozwy r-58xgd4 r-42olwf r-z2wwpe r-d045u9 r-18u37iz r-1777fci r-peo1c r-xb9fkz r-kzbkwu r-d9fdf6 r-1b3ntt7">
                                <div dir="auto" aria-hidden="true" className="css-1rynq56 r-q4m81j r-184en5c" style={{color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'StreetLCG2', fontWeight: 600, fontStyle: 'normal', fontSize: 14, letterSpacing: 0, lineHeight: 21}}>Iniciar sesión
                                </div>
                                </div>
                                </div>
                                <div aria-label="¿Olvidaste la contraseña?" role="link" tabIndex={0} className="css-175oi2r r-1loqt21 r-1otgn73" style={{flexShrink: 1}}>
                                    <div dir="auto" className="css-1rynq56 r-7e3msg" data-testid="ForgotPasswordLink" style={{color: 'rgb(145, 129, 248)', fontFamily: 'StreetLCG2', fontWeight: 600, fontStyle: 'normal', fontSize: 14, letterSpacing: 0, lineHeight: 21}}>¿Olvidaste la contraseña?
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="css-175oi2r r-1awozwy r-18u37iz r-1777fci r-764hgp">
                                        <div className="css-175oi2r r-109y4c4 r-16y2uox r-9tfo2e" />
                                        <div dir="auto" className="css-1rynq56 r-1n9sb9w" style={{color: 'rgb(255, 255, 255)', fontFamily: 'StreetLCG2', fontWeight: 600, fontStyle: 'normal', fontSize: 14, letterSpacing: 0, lineHeight: 21}}>O
                                        </div>
                                        <div className="css-175oi2r r-109y4c4 r-16y2uox r-9tfo2e" />
                                        </div>
                                        <div className="css-175oi2r r-1habvwh r-eqz5dr r-1h0z5md">
                                            <div dir="auto" className="css-1rynq56 r-117bsoe" data-testid="SignInProviderLoginSectionTitle" style={{color: 'rgb(255, 255, 255)', fontFamily: 'StreetLCG2', fontWeight: 400, fontStyle: 'normal', fontSize: 14, letterSpacing: 0, lineHeight: 21}}>¿Tienes HBO Max a través de otra empresa, como un proveedor de TV, de telefonía móvil o Internet?
                                            </div>
                                            <div aria-label="Iniciar sesión con un proveedor" role="button" tabIndex={0} className="css-175oi2r r-1loqt21 r-1otgn73" data-testid="ProviderButton">
                                                <div className="css-175oi2r r-1awozwy r-14t88dt r-42olwf r-z2wwpe r-d045u9 r-18u37iz r-1777fci r-peo1c r-xb9fkz r-kzbkwu r-d9fdf6 r-1b3ntt7">
                                                    <div dir="auto" aria-hidden="true" className="css-1rynq56 r-q4m81j r-184en5c" style={{color: 'rgb(255, 255, 255)', fontFamily: 'StreetLCG2', fontWeight: 600, fontStyle: 'normal', fontSize: 14, letterSpacing: 0, lineHeight: 21}}>Iniciar sesión con un proveedor
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </div> */
}

/*  <form className="form"
 onSubmit={async ( e ) => {
     e.preventDefault()
     await login().then( function ( response ) {
         var data = response.data.login
         if (data) {
             navigate('/home')
             setUserSession({isValid: true})
         } else {
             setIsInvalid('Invalid login!! Try again ')
         }
     })
 }}
 >
<div className="mb-6">
 <label
   htmlFor="email"
   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
 >
   Your email
 </label>
 <input
   onChange={(event) => {
     setEmail(event.target.value)
   }}
   type="email"
   id="email"
   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   placeholder="name@flowbite.com"
   required
 />
</div>
<div className="mb-6">
 <label
   htmlFor="password"
   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
 >
   Your password
 </label>
 <input
   onChange={(event) => {
     setPassword(event.target.value)
   }}
   type="password"
   id="password"
   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
   required
 />
</div>
<button
 type="submit"
 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
 Submit
</button>
<div className="mb-6">
<p className="text-red-600 mt-5">
 {isInvalid}
</p>
</div>
</form> */
