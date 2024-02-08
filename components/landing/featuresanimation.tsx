export default function FeaturesAnimation() {
  return (
    <>
      <script
        async
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></script>
      {/* @ts-ignore */}
      <dotlottie-player
        src="https://lottie.host/53e17963-d7f5-45df-b5d7-b29d31b78583/aGIQut4PaH.json"
        background="transparent"
        speed="1"
        style={{
          width: "100%",
          height: "100%",
        }}
        direction="1"
        playMode="normal"
        loop
        autoplay
      >
        {/* @ts-ignore */}
      </dotlottie-player>
    </>
  );
}
