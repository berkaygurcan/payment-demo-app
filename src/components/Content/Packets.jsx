import { Button, Divider, List } from "antd";
import Title from "antd/lib/typography/Title";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clear, clearSelectedItems } from "../../features/counter/packetsSlice";

import PacketsListItem from "./PacketsListItem";

const Packets = () => {
  //bu data normalde state ile gelicek
  const packets = useSelector((state) => state.packets.value);
  const dispatch = useDispatch();
  const selectedPackets = useSelector((state) => state.packets.selectedItems);
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return selectedPackets.reduce((total, item) => total + item.amount, 0);
  };

  const handleClick = () => {
    navigate("/paymentContent");
  };

  return (
    <>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={packets}
        renderItem={(item) => <PacketsListItem item={item} />}
      />
      <Divider />

      <div
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Title level={5}>
            Seçilen Paket Tutarı : {calculateTotalPrice()} TL
          </Title>
        </div>

        <Button
          type="primary"
          onClick={handleClick}
          style={{ marginBottom: 10 }}
          size={"medium"}
        >
          Devam Et
        </Button>
      </div>
    </>
  );
};

export default Packets;
