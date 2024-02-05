<template>
  <div class="event-cards-container">
    <HomeEventCard>
      <template #name>
        <h3>Antelope Valley</h3>
      </template>

      <template #text>
        <p>
          Antelope Valley is CalClub Rallycross’s newest venue and ran by
          Rodnoc racing. The surface is hard packed under a thin layer of
          soft dirt. Fast lap times are in the 100sec range, now that is a
          long course!
        </p>
      </template>
    </HomeEventCard>
    <HomeEventCard>
      <template #name>
        <h3>Glen Helen</h3>
      </template>

      <template #text>
        <p>
          Our championship series! The rallycrosses here count towards the
          CalClub RallyX Championship series. Each season consists of 5
          championship races, practices usually precedes each race and some
          weekends are double headers.
        </p>
      </template>
    </HomeEventCard>
    <HomeEventCard>
      <template #name>
        <h3>Ridgecrest</h3>
      </template>

      <template #text>
        <p>
          The rallycross here in Ridgecrest, CA count towards the California
          Rally Series RallyX championship points. This series uses the same
          SCCA rule’s as the Glen Helen series. The races here are held in
          conjunction with the CRS Rally School and High Desert Trails Rally.
        </p>
      </template>
    </HomeEventCard>
    <HomeEventCard>
      <template #name>
        <h3>Johnson Valley</h3>
      </template>

      <template #text>
        <p>
          Johnson Valley takes the enduro format and combines it with rallycross.
          You are allowed only one 25 minute run and you are scored based on how
          many laps you finish within that time frame. This is a very unique format
          and will get your adrenaline pumping!
        </p>
        <em>
          NOTE: NOT ORGANIZED OR AFFILIATED WITH SCCA CALCLUB
        </em>
      </template>
    </HomeEventCard>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.event-cards-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
}
</style>
