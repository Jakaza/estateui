import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>MzansiEstate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user"> 
          
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAQEBAVEBAVDRYbDRUNDRsQEA4gIB0iIiAdHx8kKDQsJCYxJx8fLTstMSs1QzAwIys9QD9AQDQ5MEABCgoKDg0NFRAQFS0lFRksNy03NzcrNzE3NzcrNysrNys3MSstKzctLTgxMS0rKystMi0rKysrKystKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQFBgIDBwj/xAA9EAABAwIDBAcFBwMEAwAAAAABAAIDBBESITEFBkFRBxMiYXGBkTJiobHBFCNCUnLR8GOi4YKSwvEVM7L/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAKBEAAgICAgECBgMBAAAAAAAAAAECEQMxEiEEE0EiIzJRYXEFM4FC/9oADAMBAAIRAxEAPwDqdkFKkXJNQlkiUJFEYIKFSd69+20b3xdXieG5EHQ94QouTpBaWyY3k3ljomF7ml4Bs7CRcLm28XSO+ZzDA0xsEZDw43xFVXbe8U1U+Rzjk43LW+yFDcxmtuPx0u5FMsv2JN+36i7wJXZ62d/LLOq3nqpLB0rgBk0BxCjotmSvvhY4/wClPG7vVB1bbz0Vr9Nbogub0WLZXSJVRAYz1jWtAaHanPifBW3Y3SixzG9cztl9nBpsAuVzbEnba7bj3c7KPfiacwWnkRayg8WOWiXOcdnq2GVr2hzSCDoQbrMLmXRZvmZyKSYWe2P7pw/GBqD3rpwWOUXF0zTGSasErUiAkiIoWSQJVIEKErUl1k1IGZKL24cm+JUoojbx9jzTYiHetB+q3PWoHMHkRdJbQmcQ2q/FNUute7nkd3aQmlS4kSG/D1zQvSSdUjkwWz1OUIQvNHXMUqQoQ9DG9bUtiY57jZoFyTwXnXezaZqaqaTQF5w3ddde6U618VGQ0iz3BrhbPne/kuJ01M+aRsbcyT/CVp8aNXJlWR3SQmz6B8zrNB94hXTZe70Udi4Y394yUhsrZbYGNa0Z/iPEqapqXj6qvNncnS0acOBJW9jOOlA0AHgFn9hvrqpcU/mlkjsOSymjiV2rpA0ZhQm0NnxyghwHiMiPNWyuIII1UBO3NKM2n0OWJNdlKdDNQTxzxk2a8FjvoV6O2JtFlTBFPGQ5r2Agg+o8iuMVcIe1zHC4IU30PbbMckuz5CRmXQX094fX1Wty9SN+6MTj6cq9mdZQEEoCqQjIFZArFqVSGlYtkoSApUgMrqG26c2juUwoTbh7Y/SpMRFvTOrkwse7lG4+gJTt6idvS4aaodyp5Pi0hEFc4ojJ1FnFZ7hj+RLQfihaK0aIXoJvs5sF0esUhKFiV5w6gpKS6EKNjOZdMkD8EMl+wXYSL6cbqrbhbMFnTEXJNm5LoHSxSF9CXi1mSAuv6KA3MgApYrZ3ufiVqjL5RGEbyE9S0lxiI8FuZEs5ZMIA4LCOS+aonFI3wY4a24+GawfFbVbYiVmIy71VXROiKlgvp62URW0RzP0VxNPlmq7tjaMMVw4m9tA0n5KPCT0hOSXuVaoiI4eoUTLI6mqIayO+KOQF9jqOI8xkn9VtUPJEbHE3/KmLqguOFzcjlr81pxxlHZlyNSR36nmD2Ne03BaC0jjdbAqr0cVvWULGG+KFxidfjaxb/aQrWFGuykAlJQCkvmmMyCAUiVoQJvsyUDtp33nkFO3Ve2ufvXJsTYxcoHe82oqg+58yB9VPFVzfg2oZu8sH94VuBXlj+yvK/ly/RxutPa8kLGs9ryQu3NfEzDD6Ues1iluhecOoIhCFACH3vpjLQ1TQ3E7qHFo8lz3cKW8To9cLrg8M11l7AQQdCLFcw3XpjC6eIixjlc037iR9FfjfwtDj9aZYHMxLMBrR2nYR35WUJU7QkJcIrAXtc8Uz+x1EhuSXkfzglKCe2aVJ+yLrSvjP4gctQnzcAzCoVPE6E53bnxyurHs+cyAW04qrlFOki1Rk1bHe16whhDeSozqHrZLlxvqS53ZCsW35Orac+GSrcNn9UHSNaZCc3usxgGpKipScqQ3CKVseTwU8bMiX8y2MkeqgqgRPxWsSNAR2mpjvFFWiYwtqHywdYMEkMloWNPMN4/t3paimf1xMLnmnA7IqADJ32OoHitMcajJNyM/qNprj0XnovlIfUx31bG5o8Lgn4tXRAuGR7RmpMUsD8DwyxIaHXFwSLHwXadjVRmp4ZSLF8LHOA4EjMJSXdlEo0OwhFktkiIgCyCAFkAmAgCrO0nfev8VaAFU603kefeKTIjdzlVekSW1Hb80zB8z9FZ38VTekp33EI5z/ACB/daPDV54lXkOsbOWVZ7RQsZz2j4oXZb7Zljo9aoWRCxXnTpAkSlY3UWBkqVtanMdbPwbLE17bcwMLh8AfNXS6r++EAwRT5Yo5LHO12vyI9bHyUoPuhrZX6RrIwS+wtcuJOQUZtfeqGm7BcQXtyay2Nt9C4nJo9Sne0YXvYQ22Z/Foo2Ld4NieySQ1DpZMU94W5kadogkeqnS3I0XJqomrZ3XVEAqnFrGOe4RNkmLnSW5ZG6nNivfG4sLS2+jX6tT7ZOzo4422ibHhFmhqdOhDXB2p4lUy4+xfDktjfbVF1kRJOYVc2STFJh7JuLDEFdB940juVN2nSOa+wHHskLPdPosJ6ZgkaARb9QUbU7GJBI+Cd7LOMYTcSNGbSfiE6fLhuHck5Sk+2CitIplZQllwc10zcR4NBTWN7MLXX5hxB+IVI2oASf5dWLo0rw5k8HGOXEPBw/cH1WrHbhZizqmXdFkLIBTM4gCyAQlanRGwCp9Se279RVyecj4KlSnM/qKUgRoeVRuk2Ts0zfekPwaFd5FzzpLlvNC3lCT6k/stPgK86KPJfy2c8kOZ8ULEoXVbM6PXSRGJJiXAo6KYhKxRdISkFihV7fmmkdTiSM5xuu8YcWIcclYLrGRgc0tOYLSHDmoe44yplCpXl7Gn8zGnLvCmqWlOEXURTQmGV9O7VjiGHm3Vp9MvJWHrgGAceKlLtGyGxY4r/wCEzq4w4kukEbAcs83LcKoC/goutoBUe08tGK/Z/wAqqMS9k1TSQtbqSLcOKre8m0Y2OHVtLnn2Ra9s9T3JMNNDdhxOI1Ifhv6JvtKMBpFOy5PtEOxW8XEqXp9hyQ0oKuYvxONrA4csJPlwUtXVBLQ42vbOyq7xOL3Lbn8p0WNPXytd1cjSWkGxBul6cpEJZFHqhzXVBI71dejWFn2aSUNAkdORI4ausBb0uVQZpQRkukdHkJbQsJFscjz8bfRaVHjCjLmlbLW1ZLFqyaUGYAswEoQmIwmPZd+g/JUmQ6+KudYbRvPuFUglQmNGD1zDpFkvVEcoB9T9V01xXKekB96ubuYwf2hbP47+1v8ABn8r6UvyU8oQULoMpR64SEoJSLhm4RCRBuojCyUJAlRQEDvFs9z3slY0khhBwtu48VAid4JByINnA8FfFWt4tmEP69oyPt24d6KsvxZK6GE8oazEdQFFU1ZJU4g09XENXHj4c07mu5oztbgomm2TikJL3MafZDHWATgkmaG2yT+1wRnA1uN9rAYccj09dS1UjAMDKdpGXXuEY9Bn8EbP2R1ObXGxN7jNxPeTmpJlGXDN1v1u1V/GKZYoNq26KJtSgLHkGcOOeLq4rtB5XJTWio8JLySXEdon9uCnd4pY43YBZzr2Fvoo1twM9TqoSfVIhOEV+SPbA6R7ImDtveGtHeTZdtoKVsMUcTfZZGGt8hZcl3OnH/lKZhAN+sOf4bMOfrZdjaE2tGGcrZsslCRZAJ0UmaEiVCQxrtN1oZD7qpOJXLbbrQSKkgqvJsaEcVx/fGXFVVJ/q29Ml15+i4tvG+88551D/mVu/j9zf4M/k/8AKIdCQoWyyqj1u4rG6QlY3XHo2ClyMSRJdJoaMg5LiWu6eU9A52Z7I+JQoN6ButmkLRto9TTSyva7CG2IaLuzNvqp2GmazQZ8zqkrqVs0UkTvZfG5p8xZXR8f7keZzLI5aHv0K0NBYcxkt1VG5lw4doEh1uBBsfiE0dM4A5Yu4quSWjbFvY8eJLfdvt3OFwm0kNY+wMwaOOBunqsaTbsJu29njJzXZELKfbbG3zHmVBqSLo5FWxu/ZjI7uN3OOrnm7lE7RqmRtJJtksNr7zxtuL4jrYKoVE0tW+wFm8eTVKGN3yloqy51XGOxxDUSYxOx5jkMg6otNnMA0+vqu7bnbTkqaOKWT28JEneQbE+drrhxiALIxoNPL/tds6PY8OzwSNS63q5XRfJ0ZckajZZQ7K5yHjktgK0kaeOaC0t0/wC1J4/sUcjeUqbtqBkDkfgt11BqtkrI3eF1oCPeCpwVr3ndaIDm9VF71Rk2TiDnfNcO2o/E9x5yE/FdnrJLMe7kwn0F1xGsdp5rf4C+GbM3kfVFDVyEiFpZE9aJCViSsQb5AXPCy5ZpsyJW+mpXvzAsOZ0Tqk2bo6T/AG/upIBWxxX2xcvsNqajazPU8ynKEK9JLpEQQhCYFU3t2Va87BkT96Bw71TZABddcc0EEEXBGYOhVH3i3VkZeSlGNn4o79tn6efhr4rLnxN9o1+PmS+GRTqqghlBxDO2rciq7tDd9vCZwAFgHDErA6WxIIsR7QcLEeSbVDmnNZllcejVLDGXdFZZsWNubiXn3inZY2NlgAO4J9Jbgm7acyOAtkh5HLYliUdIY7PpnSVDGtF3OyYOea77sukENPDCODRfvtx89VT9y90jHKKmYYXBlmNIzYDq49/CyvbDcl2nAdy2YYuuTMOeab4oU6rIckhSsPJXGcSSAHXzTR+OM5Zt5HgpTAtMzEnGxlc3mqMUbLfmzVXkOauu19nCSNwGRGbVSJciQciNQsWaLTstg+hltl+GnnP9CT/5K4xVajwXXd532pJz/Tt6kBcgqfa8lu8JVif7M+bvIv0aUJChaaFR6re5S2xYMi8jM5Nuo+gpOtfn7Izd+ysYAGQyHCywwj3ZaKhCFcAIQhAAhCEACEIQAw2jsanqP/dE15t7VrP9Rmq1WdHkDr9XM9nLGA8D5K6LFx77KuWKMtonHLOOmUSDo6A9qouPdisfW6mNmbr01LZzW9r88pxP8hoFMyOk4Gw8EjIOJzPNxRHDCPaQ5Z5y6bMMNxYCzfi7xS2AWbRe5OgWhxuVYUiuettO0krSAntOMkhmTzmB8kOZ5+a0B93kk2ss3S4WOefJMDU4DO+liufbwswStdweLeYV6qCRG3m4kKrbw0vWQvA9poD2eWfyuqssbixxdMoO+klqR/e5o+P+FyqoOZXSt95B9kbbjM35Fczm1PirvFVYf9Ksn9hghBQrwPZtDT9WwDjq7xThCFnLQQhCABCEIAEIQgAQhCABJZKhACELXKfwjzW1YnK5QA1qMrNHmtYboFswkkk63RbMpiMAE5YbNJ7k24rZUuwsPeEhDSJ1ye8pxWnssbzd8v4EzpTmFvqZLyMHJpQBhtJwFhyZYeLslFPF5XDhp8FvdNjke8+w259NE2pLl5d3/NFAcf6QmdU0QflqTbwtl81zl5zPium9M0eCri5PiLvPIfRcwcrca440itu5sxSpEItkj2uhaus7VvRbCVUTFQmLqmxTqKUOGWqdBZsQkab38UqQwQhCABCEIAEISEoAVapX8PmtibPzcQECELtVg1ZSi1hbNYEpiFGqb7Ql4LddMKp2RKQBROuStNXU2dI4a2DW+P8ACihd2Se9RUk2J9r5BxJ+Q+CZEdPeAwNbpf8A3lOaVvaA5DPxKZwvuS85gewE+oGnU6nMoGc26dKL7qmnGrZHNP8AqF/+K4u4r0Z0n0H2igqGgXLI8TLDi3P6WXnJWJ9Ea7BCEIGeyasXv4rKjqMQIJzA4pEKskM5JD3eiKOoLZADockIUvYRKxfi/UtiEKBIEIQgYIQhACErWX+CEIEKH6DRJGzMn3kIQBpmJutcmSVCYjRI5R20H2aUISEN6qfqoHO5MJ+ChqEZWdr+LvSoQIk4ml5AaCQOQUrHC4C2Q53KVCYxtXUwLCCb93BeWdrxMZUTsjN42zvEZBvcBxshCaENEIQpgf/Z" alt="" />
          
          <span>Themba G Chauke</span>
          <Link className="profile" to="/profile">
          <div className="notification">3</div>
          Profile</Link>
          </div>
        ) : (
          <>
            <a href="">Sign in</a>
            <a href="" className="register">
              Sign up
            </a>{" "}
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
